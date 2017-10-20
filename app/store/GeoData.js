Ext.define('MyKitchen.store.GeoData', {
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
        url: '/KitchenSink/GeoData'
    },

    lazyFill: false
});
