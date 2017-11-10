Ext.define('MyKitchen.store.ForumThreads', {
    extend: 'Ext.data.Store',
    alias: 'store.forumthreads',

    model: 'MyKitchen.model.grid.ForumThread',

    pageSize: 50,
    remoteSort: true,

    sorters: [{
        property: 'lastpost',
        direction: 'DESC'
    }]
});
