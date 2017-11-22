Ext.define('MyKitchen.store.SimpleGridData', { //类名
    extend: 'Ext.data.Store',
    alias: 'store.simpleGridData', //别名
    storeId: 'simpleGridDataStoreId', //storeId
    
    fields: [
        { name: 'name', type: 'string'},
        { name: 'age', type: 'int' }
    ],

    data: [
        { name: '外部定义的store', age: 25 },
        { name: 'bbb', age: 24 },
        { name: 'ccc', age: 22 },
        { name: 'salina', age: 26 },
        { name: 'frank', age: 24 },
        { name: 'jeff', age: 27 },
        { name: 'bill', age: 21 },
    ]
    
});