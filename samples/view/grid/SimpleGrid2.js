Ext.define('MyKitchen.view.grid.SimpleGrid2', {
    extend: 'Ext.grid.Panel',
    xtype: 'simple-grid2',


    title: 'Simple Grid2',
    width: 600,
    height: 350,

    /*
    三种方式设置store:
    1、store class
    2、store id
    3、配置
    */

    //store class
    //store: 'SimpleGridData',

    //store id  没通过
    //store: 'simpleGridDataStoreId',

    //配置，定义内嵌store 测试通过
    // store: {
    //     data: [
    //         { name: '配置，内嵌数据', age: 25 },
    //         { name: 'bbb', age: 24 },
    //         { name: 'ccc', age: 22 },
    //         { name: 'salina', age: 26 },
    //         { name: 'frank', age: 24 },
    //         { name: 'jeff', age: 27 },
    //         { name: 'bill', age: 21 },
    //     ]
    // },

    //配置，外部定义store  测试通过
    store: {
        type: 'simpleGridData', //使用的store别名    
    },

    columns: [
        {
            text: '姓名',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: '年龄',
            dataIndex: 'age'
        }
    ]
    
});
