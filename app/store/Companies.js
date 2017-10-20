Ext.define('MyKitchen.store.Companies', {
    extend: 'Ext.data.Store',
    alias: 'store.companies',
    
    model: 'MyKitchen.model.Company',
    
    autoLoad: true,
    pageSize: null,
    
    proxy: {
        type: 'ajax',
        url: '/MyKitchen/Company',

        reader: {
            type: 'json',
            rootProperty: 'data',

            // Do not attempt to load orders inline.
            // They are loaded through the proxy
            implicitIncludes: false
        }
    }
});
