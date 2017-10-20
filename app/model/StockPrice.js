Ext.define('MyKitchen.model.StockPrice', {
    extend: 'MyKitchen.model.Base',

    fields: [
        {name: 'time',  type: 'number'},
        {name: 'open',  type: 'number'},
        {name: 'high',  type: 'number'},
        {name: 'low',   type: 'number'},
        {name: 'close', type: 'number'}
    ]
});