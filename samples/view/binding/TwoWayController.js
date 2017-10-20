Ext.define('MyKitchen.view.binding.TwoWayController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.binding.twoway',

    onTitleButtonClick: function() {
        var title = '标题' + Ext.Number.randomInt(1, 100);
        this.getViewModel().set('title', title);
    }
});