/**
 * 公用类,各种共用方法
 */
Ext.define('MyKitchen.util', {
    //别名，为了方便调用，这样通过 util.方法名(参数) 就能直接使用
    //如util.equals({a:1},{b:2});
    alternateClassName: 'util',

    statics: {

        //判断一个字符串是否是标准json字符串
       isJsonStr: function(str){
        if (typeof str == 'string') {
            try {
                var obj=JSON.parse(str);
                if(str.indexOf('{')>-1){
                    return true;
                }else{
                    return false;
                }

            } catch(e) {
                //console.log(e);
                return false;
            }
        }
        return false;
       }



    }
});