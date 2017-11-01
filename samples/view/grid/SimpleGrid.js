Ext.define('MyKitchen.view.grid.SimpleGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'simple-grid',


    title: 'Simple Grid',
    width: 600,
    height: 350,

    store: {
        data: [
            { name: 'louis', age: 25 },
            { name: 'mark', age: 24 },
            { name: 'jerry', age: 22 },
            { name: 'salina', age: 26 },
            { name: 'frank', age: 24 },
            { name: 'jeff', age: 27 },
            { name: 'bill', age: 21 },
        ]
    },
    columns: [
        {
            text: '姓名',
            dataIndex: 'name'
        },
        {
            text: '年龄',
            dataIndex: 'age'
        }
    ]
    
});
