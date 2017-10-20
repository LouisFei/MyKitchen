Ext.define('MyKitchen.store.CountryStates', {
    extend: 'Ext.data.Store',

    alias: 'store.country-states',

    model: 'MyKitchen.model.State',

    pageSize: 0,

    proxy: {
        type: 'ajax',
        reader: 'json',
        url: '/MyKitchen/CountryState'
    }
});
