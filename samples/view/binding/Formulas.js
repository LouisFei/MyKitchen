/**
 * This example shows data binding using formulas (calculated properties). This example
 * also demonstrates automatic dependency resolution between formulas that depend on each
 * other's values.
 */
Ext.define('MyKitchen.view.binding.Formulas', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-formulas',
    //<example>
    otherContent: [{
        type: 'ViewModel',
        path: 'samples/view/binding/FormulasModel.js'
    }],
    //</example>

    title: '视图模型，公式计算',

    width: 370,
    bodyPadding: 10,
    
    viewModel: {
        // Formulas are defined by the ViewModel:
        type: 'binding-formulas',
        data: {
            x: 10
        }
    },

    items: [{
        xtype: 'numberfield',
        fieldLabel: '数值',
        bind: '{x}'
    }, {
        xtype: 'displayfield',
        fieldLabel: '计算结果',
        bind: '{x} * 2 = {twice}, {x} * 4 = {quad}'
    }]
});
