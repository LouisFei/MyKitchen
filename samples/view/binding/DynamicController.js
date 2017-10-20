Ext.define('MyKitchen.view.binding.DynamicController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.binding-dynamic',

    contentCount: 0,
    titleCount: 0,

    onChangeTitleClick: function() {
        this.getViewModel().set('title', '新标题 ' + ++this.titleCount);
    },

    onChangeContentClick: function() {
        this.getViewModel().set('content', '新内容 ' + ++this.contentCount);
    }
});
