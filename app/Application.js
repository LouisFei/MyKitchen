/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyKitchen.Application', {
    extend: 'Ext.app.Application',
    namespace: 'MyKitchen',

    requires: [
        'MyKitchen.*',

        'Ext.app.*',
        'Ext.state.CookieProvider',
        'Ext.window.MessageBox',
        'Ext.tip.QuickTipManager',        
        'Ext.chart.*'//,
        //'Ext.d3.*'
    ],
    
    defaultToken: 'all',

    controllers: [
        'Global',
        'Samples',
        'Direct'
    ],

    init: function() {
        if ('nocss3' in Ext.Object.fromQueryString(location.search)) {
            Ext.supports.CSS3BorderRadius = false;
            Ext.getBody().addCls('x-nbr x-nlg');
        }

        Ext.create('MyKitchen.store.Navigation', {
            storeId: 'navigation'
        });

        Ext.setGlyphFontFamily('Pictos');
        Ext.tip.QuickTipManager.init(null, {
            showOnTap: true
        });

        if (!Ext.platformTags.test) {
            Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
        }
    },

    launch: function () {
        var me = this;

        if (Ext.os.deviceType === 'Phone') {
            Ext.Msg.show({
                title: 'Unsupported Device',
                message: 'Ext JS Classic Toolkit does not support phones.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });

            // don't let any routes fire
            Ext.on('beforeroute', function () {
                return false;
            });

            return;
        }

       
        this.setMainView({
            xclass: 'MyKitchen.view.main.Main'
        });

        this.destroyLoader();

        console.log('开启ajax请求监听，并增加自动遮罩效果');
        me.openAjaxMonitor();
    },

    destroyLoader: function () {
        if (Ext.supports.Transitions) {
            //this.callParent();
            var top     = Ext.get('loadingSplashTop'),
                wrapper = Ext.fly('loadingSplash');

            top.on('transitionend', wrapper.destroy, wrapper, { single: true });

            wrapper.addCls('app-loaded');

        } else {
            var circles = Ext.fly('loadingSplashCircles'),
                bottom = Ext.get('loadingSplashBottom'),
                top = Ext.get('loadingSplashTop'),
                wrapper = Ext.fly('loadingSplash');

            circles.destroy();

            Ext.create('Ext.fx.Anim', {
                target: top,
                duration: 500,
                from: {
                    top: 0
                },
                to: {
                    top: top.getHeight() * -1
                }
            });

            Ext.create('Ext.fx.Anim', {
                target: bottom,
                duration: 500,
                from: {
                    bottom: 0
                },
                to: {
                    bottom: bottom.getHeight() * -1
                },
                listeners: {
                    single: true,
                    delay: 500, //afteranimate event and callback fn are executing right away
                    scope: wrapper,
                    afteranimate: wrapper.destroy
                }
            });
        }
    },

    /**
     * 开启ajax请求监听，并增加自动遮罩效果
     */
    openAjaxMonitor: function () {
        var me = this;

        //监听ajax事件，开始请求时显示遮罩
        Ext.Ajax.on('beforerequest', function (connection, options) {
            //console.log('Ajax请求开始...');
            //console.log('Ajax请求地址：', options.url);
            //console.log('Ajax请求方式：', options.method);
            console.log(Ext.String.format('Ajax请求：{0} {1}', options.method, options.url));           

            var params = options.params;

            if (params) {
                console.log('Ajax请求参数：', params);
            }

            if (options.jsonData) {
                console.log('Ajax请求json参数：', options.jsonData);
            }

            //某些情况下不需要遮罩
            //在参数里面增加isNoMask:true即可不显示遮罩
            if (!(params && params.isNoMask)) {
                me.messageTotal++;
                //console.log('开始请求，请求总数：', me.messageTotal);
                var window = Ext.WindowManager.getActive();
                //window弹窗才有遮罩
                if (window && (window.isWindow || window.isMask) && !window.isToast) {
                    me.maskWindow = window;
                    window.mask('正在请求数据，请等待...');
                } else {
                    Ext.getBody().mask('正在请求数据，请等待...');
                }
            }
            //else {
            //    console.log('开始请求，无须遮罩，请求总数：', me.messageTotal);
            //}
        });

        //ajax请求成功
        Ext.Ajax.on('requestcomplete', function (connection, response, options) {
            if(util.isJsonStr(response.responseText)){
                console.log('Ajax请求成功,服务端返回数据(已转为json对象)：', Ext.decode(response.responseText));
            } else {
                console.log('Ajax请求成功,服务端返回数据(不是json字符串)：', response.responseText);
            }            

            var params = options.params;
            //某些情况下不需要遮罩
            if (!(params && params.isNoMask)) {
                me.hideMessage();
                //console.log('请求成功，请求总数：', me.messageTotal);
            }
        });

            //ajax请求失败
        Ext.Ajax.on('requestexception', function (connection, response, options) {
            var params = options.params;
            //某些情况下不需要遮罩
            if (!(params && params.isNoMask)) {
                me.hideMessage();
                //console.log('请求失败，请求总数：', me.messageTotal);
            }
            Ext.toast('请求失败，服务端无法连接或出错！');
        });
    },

    /**
     * Ajax请求完成后，隐藏遮罩
     */
    hideMessage: function () {
        var me = this;
            //console.log('加载完成，请求总数：', me.messageTotal);
        if (me.messageTotal > 1) {
            me.messageTotal--;
        } else {
            if (me.maskWindow && !me.maskWindow.isDestroyed) {
                me.maskWindow.unmask();
                me.maskWindow = null;
            }
            Ext.getBody().unmask();
            //请求总数归0
            me.messageTotal = 0;
        }
    },

    
}, function() {
    MyKitchen.toast = function (title) {
        var html = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));

        if (!html) {
            html = title;
            title = null;
        }

        new Ext.window.Toast({
            title: title,
            html: html,
            width: 400,
            align: 't'
        }).show();
    };
});
