/**
 * 头部UI
 */
Ext.define('MyKitchen.view.Header', {
    extend: 'Ext.Container',
    xtype: 'appHeader',

    id: 'app-header',

    title: '我的厨房',

    height: 52,
    
    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function() {
        document.title = this.title;

        this.items = [{
            xtype: 'component',
            id: 'app-header-logo',
            cls: [ 'ext', 'ext-sencha' ]
        },{
            xtype: 'component',
            id: 'app-header-title',
            html: this.title,
            flex: 1
        }];

        if (!Ext.getCmp('options-toolbar')) {
            this.items.push({
                xtype: 'profileSwitcher'
            });
        }

        this.callParent();
    }
});
