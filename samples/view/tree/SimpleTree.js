/**
 * This example demonstrates basic tree configuration.
 */
Ext.define('MyKitchen.view.tree.SimpleTree', {
    extend: 'Ext.Container',
    xtype: 'simple-tree',
    width: 640,

    items: [{
        xtype: 'treepanel',
        title: 'Tree',
        width: 600,
        height: 400,
        rootVisible: false,
        useArrows: true,
        store: {
            type: 'tree',
            parentIdProperty: 'parentId',
            root: {
                text: '根',
                expanded: true
            },            
            data: [
                {
                    text: '江苏',
                    id: 1
                }, {
                    text: '淮安',
                    id: 101,                    
                    parentId: 1
                }, {
                    text: '苏州',
                    id: 102,
                    parentId: 1
                }, {
                    text: '南京',
                    id: 103,
                    parentId: 1
                },
                {
                    text: '上海',
                    id: 2
                },
                {
                    text: '北京',
                    id: 3
                },
                {
                    text: '姑苏区',
                    leaf: true,
                    parentId: 102
                },
                {
                    text: '工业园区',
                    leaf: true,
                    parentId: 102
                },
                {
                    text: '吴中区',
                    leaf: true,
                    parentId: 102
                }
            ]
        }
    }]
});
