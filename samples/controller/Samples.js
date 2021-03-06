Ext.define('MyKitchen.controller.Samples', {
    extend: 'Ext.app.Controller',
    namespace: 'MyKitchen',

    stores: [
        'Companies',
        'Restaurants',
        'Files',
        'States',
        'RemoteStates',
        'BigData',
        "USD2EUR",
        'Widgets',
        'Posts',
        'GeoData',
        'StandardCharts',
        'Pie',
        'StockPrice',
        'LinearGeoData',
        'CheckTree'
    ],

    controllers: [
        'Direct'
    ]
});