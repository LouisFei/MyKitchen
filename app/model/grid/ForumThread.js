Ext.define('MyKitchen.model.grid.ForumThread', {
    extend: 'MyKitchen.model.Base',

    requires: [
        'Ext.data.proxy.JsonP'
    ],

    idProperty: 'threadid',

    fields: [
        'title', //帖子标题
        'forumtitle', //论坛名称
        'forumid', //论坛编号
        'username', //用户名
        {name: 'replycount', type: 'int'}, //回复次数
        {name: 'lastpost', mapping: 'lastpost', type: 'date', dateFormat: 'timestamp'},
        'lastposter', //最后回复
        'excerpt', //摘要
        'threadid'
    ],

    proxy: {
        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        type: 'jsonp',
        url: 'https://www.sencha.com/forum/topics-browse-remote.php',
        reader: {
            rootProperty: 'topics',
            totalProperty: 'totalCount'
        },
        // sends single sort as multi parameter
        simpleSortMode: true
    }
});
