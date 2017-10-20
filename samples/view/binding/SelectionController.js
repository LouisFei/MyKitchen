Ext.define('MyKitchen.view.binding.SelectionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.binding.selection',

    /**
     * 当视图模型实例被创建时调用。
     * Ext.mixin.Bindable .updateViewModel: function (viewModel, oldViewModel) 
     */
    initViewModel: function(vm) {
        /**
         * Ext.app.ViewModel
         * bind: function (descriptor, callback, scope, options)
         */
        vm.bind('{selectedCompany}', 'onSelect', this);
    },

    onSelect: function(selection) {
        var dataview;
        if (selection) {
            this.lookup('grid').ensureVisible(selection);
            dataview = this.lookup('dataview');
            dataview.getScrollable().scrollIntoView(dataview.getNode(selection));
        }
    }
});