Ext.define('MyKitchen.store.Countries', {
    extend: 'Ext.data.Store',

    alias: 'store.countries',

    model: 'MyKitchen.model.tree.Country',

    proxy: {
        type: 'ajax',
        reader: 'json',
        url: '/MyKitchen/Country'
    }
});
