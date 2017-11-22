/**
 * This example is an advanced tree example. It illustrates:
 *
 * - Multiple headers
 * - Preloading of nodes with a single AJAX request
 * - Header hiding, showing, reordering and resizing
 * - useArrows configuration
 * - Keyboard Navigation
 * - Discontiguous selection by holding the CTRL key
 * - Using custom iconCls
 * - singleExpand has been set to true
 */
Ext.define('MyKitchen.view.tree.TreeGrid2', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree-grid2',
    //controller: 'tree-grid',

   
    title: '测试测试',
    width: 1000,
    height: 370,

    reserveScrollbar: true,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,

    columns: [
        {
            xtype: 'treecolumn', //this is so we know which column will show the tree
            text: '任务',
            dataIndex: 'task',
            flex: 2,
            sortable: true
        },
        // {
        //     text: '分配给',
        //     dataIndex: 'user',
        //     flex: 1,
        //     sortable: true
        // },
        {
            xtype: 'widgetcolumn',
            text: '部件列',
            flex: 2,
            widget: {
                xtype: 'checkboxgroup',
                //fieldLabel: 'Auto Layout 自动布局',
                //cls: 'x-check-group-alt',
                items: [
                    { boxLabel: 'Item 1', name: 'cb-auto-1' },
                    { boxLabel: 'Item 2', name: 'cb-auto-2', checked: true },
                    { boxLabel: 'Item 3', name: 'cb-auto-3' },
                    { boxLabel: 'Item 4', name: 'cb-auto-4' },
                    { boxLabel: 'Item 5', name: 'cb-auto-5' }
                ]
            }
        },
        {
            xtype: 'actioncolumn',
            text: '编辑',
            width: 55,
            menuDisabled: true,
            tooltip: '编辑任务',
            align: 'center',
            iconCls: 'tree-grid-edit-task',
            handler: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
                Ext.Msg.alert('编辑' + (record.get('done') ? ' completed task' : '') ,
                    record.get('task'));
            },
            isActionDisabled: function(view, rowIdx, colIdx, item, record){
                // Only leaf level tasks may be edited
                return !record.data.leaf;
            }
        }],

    store: {
        fields: [{
            name: 'task',
            type: 'string'
        }, {
            name: 'user',
            type: 'string'
        }, {
            name: 'duration',
            type: 'float'
        }, {
            name: 'done',
            type: 'boolean'
        }],
        folderSort: true,
        data: {
            "text": ".",
            "children": [
                {
                    "task": "Project: Shopping",
                    "duration": 13.25,
                    "user": "Tommy Maintz",
                    //"iconCls": "tree-grid-task-folder",
                    "expanded": true,
                    "children": [
                        {
                            "task": "Housewares",
                            "duration": 1.25,
                            "user": "Tommy Maintz",
                            //"iconCls": "tree-grid-task-folder",
                            "children": [
                                {
                                    "task": "Kitchen supplies",
                                    "duration": 0.25,
                                    "user": "Tommy Maintz",
                                    "leaf": true,
                                    //"iconCls": "tree-grid-task"
                                }, {
                                    "task": "Groceries",
                                    "duration": .4,
                                    "user": "Tommy Maintz",
                                    "leaf": true,
                                    "iconCls": "tree-grid-task",
                                    "done": true
                                }, {
                                    "task": "Cleaning supplies",
                                    "duration": .4,
                                    "user": "Tommy Maintz",
                                    "leaf": true,
                                    "iconCls": "tree-grid-task"
                                }, {
                                    "task": "Office supplies",
                                    "duration": .2,
                                    "user": "Tommy Maintz",
                                    "leaf": true,
                                    "iconCls": "tree-grid-task"
                                }
                            ]
                        }, {
                            "task": "Remodeling",
                            "duration": 12,
                            "user": "Tommy Maintz",
                            "iconCls": "tree-grid-task-folder",
                            "expanded": true,
                            "children": [
                                {
                                    "task": "Retile kitchen",
                                    "duration": 6.5,
                                    "user": "Tommy Maintz",
                                    "leaf": true,
                                    "iconCls": "tree-grid-task"
                                }, {
                                    "task": "Paint bedroom",
                                    "duration": 2.75,
                                    "user": "Tommy Maintz",
                                    "iconCls": "tree-grid-task-folder",
                                    "children": [
                                        {
                                            "task": "Ceiling",
                                            "duration": 1.25,
                                            "user": "Tommy Maintz",
                                            "iconCls": "tree-grid-task",
                                            "leaf": true
                                        }, {
                                            "task": "Walls",
                                            "duration": 1.5,
                                            "user": "Tommy Maintz",
                                            "iconCls": "tree-grid-task",
                                            "leaf": true
                                        }
                                    ]
                                }, {
                                    "task": "Decorate living room",
                                    "duration": 2.75,
                                    "user": "Tommy Maintz",
                                    "leaf": true,
                                    "iconCls": "tree-grid-task",
                                    "done": true
                                }, {
                                    "task": "Fix lights",
                                    "duration": .75,
                                    "user": "Tommy Maintz",
                                    "leaf": true,
                                    "iconCls": "tree-grid-task",
                                    "done": true
                                }, {
                                    "task": "Reattach screen door",
                                    "duration": 2,
                                    "user": "Tommy Maintz",
                                    "leaf": true,
                                    "iconCls": "tree-grid-task"
                                }
                            ]
                        }
                    ]
                }, {
                    "task": "Project: Testing",
                    "duration": 2,
                    "user": "Core Team",
                    "iconCls": "tree-grid-task-folder",
                    "children": [
                        {
                            "task": "Mac OSX",
                            "duration": 0.75,
                            "user": "Tommy Maintz",
                            "iconCls": "tree-grid-task-folder",
                            "children": [
                                {
                                    "task": "FireFox",
                                    "duration": 0.25,
                                    "user": "Tommy Maintz",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }, {
                                    "task": "Safari",
                                    "duration": 0.25,
                                    "user": "Tommy Maintz",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }, {
                                    "task": "Chrome",
                                    "duration": 0.25,
                                    "user": "Tommy Maintz",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }
                            ]
                        }, {
                            "task": "Windows",
                            "duration": 3.75,
                            "user": "Darrell Meyer",
                            "iconCls": "tree-grid-task-folder",
                            "children": [
                                {
                                    "task": "FireFox",
                                    "duration": 0.25,
                                    "user": "Darrell Meyer",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }, {
                                    "task": "Safari",
                                    "duration": 0.25,
                                    "user": "Darrell Meyer",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }, {
                                    "task": "Chrome",
                                    "duration": 0.25,
                                    "user": "Darrell Meyer",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }, {
                                    "task": "Internet Explorer",
                                    "duration": 3,
                                    "user": "Darrell Meyer",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }
                            ]
                        }, {
                            "task": "Linux",
                            "duration": 0.5,
                            "user": "Aaron Conran",
                            "iconCls": "tree-grid-task-folder",
                            "children": [
                                {
                                    "task": "FireFox",
                                    "duration": 0.25,
                                    "user": "Aaron Conran",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }, {
                                    "task": "Chrome",
                                    "duration": 0.25,
                                    "user": "Aaron Conran",
                                    "iconCls": "tree-grid-task",
                                    "leaf": true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
});
