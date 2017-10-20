/**
 * This example shows simple dynamic data binding. When the data in the underlying view
 * model is modified, the change is relayed back to the panel and the markup is updated.
 */
Ext.define('MyKitchen.view.binding.Dynamic', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-dynamic',

    controller: 'binding-dynamic',

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'view/binding/DynamicController.js'
    }],
    //</example>
    
    width: 300,
    bodyPadding: 10,

    viewModel: {
        data: {
            title: 'Some Title',
            content: 'Some Content'
        }
    },
    
    bind: {
        title: 'Info - {title}',
        html: 'Stuff: {content}'
    },
    
    tbar: [{
        text: '改变面板标题',
        listeners: {
            click: 'onChangeTitleClick'
        }
    }, {
        text: '改变面板内容',
        listeners: {
            click: 'onChangeContentClick'
        }
    }]
});
