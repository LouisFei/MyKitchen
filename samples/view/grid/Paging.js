/**
 * This example demonstrates using a paging display.
 */
Ext.define('MyKitchen.view.grid.Paging', {
    extend: 'Ext.grid.Panel',
    xtype: 'paging-grid',
    controller: 'paging-grid',

    requires: [
        'Ext.toolbar.Paging',
        'Ext.ux.PreviewPlugin'
    ],

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'samples/view/grid/PagingController.js'
    }, {
        type: 'Store',
        path: 'app/store/ForumThreads.js'
    }, {
        type: 'Model',
        path: 'app/model/grid/ForumThread.js'
    }],
    profiles: {
        classic: {
            width: 700,
            percentChangeColumnWidth: 75,
            lastUpdatedColumnWidth: 85
        },
        neptune: {
            width: 760,
            percentChangeColumnWidth: 100,
            lastUpdatedColumnWidth: 115
        }
    },
    //</example>

    title: 'Browse Forums',
    width: 900,
    height: 500,

    autoLoad: true,
    frame: true,
    disableSelection: true,
    loadMask: true,

    store: {
        type: 'forumthreads'
    },
    viewModel: {
        data: {
            expanded: true
        }
    },

    plugins: {
        //预览
        preview: {
            expanded: true,
            bodyField: 'excerpt'
        }
    },

    viewConfig: {
        trackOver: false,
        stripeRows: false
    },

    columns: [{
        text: "标题",
        dataIndex: 'title',

        flex: 1,
        sortable: false,
        renderer: 'renderTopic'
    },{
        text: "Author作者",
        dataIndex: 'username',

        width: 150,
        //hidden: true, //隐藏，可通过菜单显示
        sortable: true
    },{
        text: "Replies回复",
        dataIndex: 'replycount',

        width: 150,
        align: 'right',
        sortable: true
    },{
        text: "Last Post 最近回复",
        dataIndex: 'lastpost',

        width: 200,
        sortable: true,
        renderer: 'renderLast'
    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        //displayMsg: 'Displaying topics {0} - {1} of {2}',
        displayMsg: '显示第{0}条 - 第{1}条，总计{2}条',
        emptyMsg: "没有数据",

        items: ['-', {
            bind: '{expanded ? "Hide Preview" : "Show Preview"}',
            pressed: '{expanded}',
            enableToggle: true,
            toggleHandler: 'onToggleExpanded'
        }]
    }
});
