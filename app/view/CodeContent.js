Ext.define('MyKitchen.view.CodeContent', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.codeContent',
    
    scrollable: true,
    
    cls: 'code-content',
    
    afterRender: function() {
        this.callParent(arguments);
        prettyPrint();
    }
});