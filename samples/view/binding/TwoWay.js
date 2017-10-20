/**
 * This example shows simple two way data binding. When the value is changed by the user
 * in the field, the change is reflected in the panel title. Similarly, when the value is
 * changed in the view model, the same change is reflected in the text field.
 */
Ext.define('MyKitchen.view.binding.TwoWay', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-two-way',

    //<example>
    requires: ['MyKitchen.view.binding.TwoWayController'],
    otherContent: [{
        type: 'Controller',
        path: 'samples/view/binding/TwoWayController.js'
    }],
    //</example>

    width: 300,
    bodyPadding: 10,

    controller: 'binding.twoway',
    viewModel: {
        data: {
            title: '标题'
        }
    },

    bind: {
        title: '{title}'
    },

    items: {
        xtype: 'textfield',
        fieldLabel: '标题',
        labelWidth: 50,
        // The default config for textfield in a bind is "value" (two-way):
        bind: '{title}'
    },

    tbar: [{
        text: '随机标题',
        handler: 'onTitleButtonClick'
    }]
});