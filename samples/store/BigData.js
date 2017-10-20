Ext.define('MyKitchen.store.BigData', {
    extend: 'Ext.data.Store',
    alias: 'store.big-data',

    model: 'MyKitchen.model.grid.Employee',

    groupField: 'department',

    proxy: {
        type: 'ajax',
        limitParam: null,
        url: '/MyKitchen/BigData',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
