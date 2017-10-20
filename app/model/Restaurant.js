Ext.define('MyKitchen.model.Restaurant', {
    extend: 'MyKitchen.model.Base',

    requires: [
        'Ext.data.summary.Average'
    ],

    fields: [
        'name',
        'cuisine',
        {
            name: 'rating',
            summary: 'average'
        }
    ]
});
