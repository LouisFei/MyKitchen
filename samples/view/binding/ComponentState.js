/**
 * This example shows how to use basic data binding to bind the state of one component to
 * the state of another.
 */
Ext.define('MyKitchen.view.binding.ComponentState', {
    extend: 'Ext.panel.Panel',

    xtype: 'binding-component-state',

    width: 350,
    layout: 'anchor',

    viewModel: true,

    title: '签约表单',

    bodyPadding: 10,

    items: [{
        xtype: 'checkbox',
        boxLabel: '是否是管理员',
        reference: 'isAdmin'
    },{
        xtype: 'textfield',
        fieldLabel: '管理员密钥',
        anchor: '0',
        bind: {
            disabled: '{!isAdmin.checked}'
        }
    }]
});
