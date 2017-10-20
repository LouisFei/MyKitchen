/**
 * This example shows simple data binding to models (Ext.data.Model). When the value is
 * changed by the user, the change is reflected to the model and is then validated. The
 * validation is reflected back to the form field to which the value is bound. The
 * validation is based on the length of the field. By looking at the model code, you can
 * see the validator that is attached to the field.
 */
Ext.define('MyKitchen.view.binding.ModelValidation', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-model-validation',
    //<example>
    otherContent: [{
        type: 'Model',
        path: 'app/model/Company.js'
    }],

    defaults: {
        labelWidth: 50
    },
    width: 300,
    bodyPadding: 10,
    //</example>

    title: '公司详情',

    // This connects bound form fields to the associated model validators:
    modelValidation: true,

    session: true,

    viewModel: {
        links: {
            theCompany: {
                type: 'Company',
                id: 1
            }
        }
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: '名称',
        msgTarget: 'side',
        bind: '{theCompany.name}'  // three-way: read, write, validate
    },{
        xtype: 'textfield',
        fieldLabel: '电话',
        msgTarget: 'side',
        bind: '{theCompany.phone}'
    },{
        xtype: 'textfield',
        fieldLabel: '价格',
        msgTarget: 'side',
        bind: '{theCompany.price}'
    }]
});
