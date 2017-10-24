/**
 * This example illustrates a combo box which loads data from a local array.
 */
Ext.define('MyKitchen.view.form.combobox.Simple', {
    extend: 'Ext.form.Panel',
    xtype: 'simple-combo',

    //<example>
    requires: [
        'MyKitchen.model.State',
        'MyKitchen.store.States'
    ],
    
    exampleTitle: 'Simple ComboBox',
    otherContent: [{
        type: 'Model',
        path: 'app/model/State.js'
    }, {
        type: 'Store',
        path: 'app/store/States.js'
    }],
    //</example>
    
    title: '简单的组合框',
    width: 500,
    layout: 'form',
    viewModel: {},
    
    items: [{
        xtype: 'fieldset',
        layout: 'anchor',
        items: [{
            xtype: 'component',
            anchor: '100%',
            html: [
                '<h3>Locally loaded data</h3>',
                '<h3>本地已加载的数据</h3>',
                '<p>This ComboBox uses local data from a JS array</p>',
                '<p>这个组合框从一个JS数组中使用本地数据</p>'
            ]
        }, {
            xtype: 'displayfield',
            fieldLabel: '已选择的州',
            bind: '{states.value}'
        }, {
            xtype: 'combobox',
            reference: 'states',
            publishes: 'value',
            fieldLabel: '请选择州',
            displayField: 'state',
            anchor: '-15',
            store: {
                type: 'states'
            },
            minChars: 0,
            queryMode: 'local',
            typeAhead: true
        }]
    }]
});
