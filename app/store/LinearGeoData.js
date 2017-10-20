Ext.define('MyKitchen.store.LinearGeoData', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'MyKitchen.model.tree.Country',
        'MyKitchen.model.tree.City'
    ],

    model: 'MyKitchen.model.tree.Territory',

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            typeProperty: 'mtype'
        },
        url: '/KitchenSink/LinearGeoData'
    },

    parentIdProperty: 'parentId'
});
