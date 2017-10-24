/**
 * This example illustrates a combo box which loads data from a local array
 * and uses a custom item template.
 */
Ext.define('MyKitchen.view.form.combobox.CustomTemplate', {
    extend: 'Ext.form.Panel',
    xtype: 'custom-template-combo',

    //<example>
    requires: [
        'MyKitchen.model.State',
        'MyKitchen.store.States'
    ],
    
    exampleTitle: 'Custom Template ComboBox',
    otherContent: [{
        type: 'Model',
        path: 'app/model/State.js'
    }, {
        type: 'Store',
        path: 'app/store/States.js'
    }],
    //</example>
    
    title: '为组合框的下拉选择自定义显示模板',
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
                '<h3>Custom Item Templates</h3>',
                '<p>This ComboBox uses the same data, but also illustrates ',
                'how to use an optional custom template to create custom UI ',
                'renditions for list items by overriding the itemTpl config. ',
                'In this case each item shows the state\'s abbreviation, and has ',
                'a QuickTip which displays the state\'s nickname when hovered over.</p>'
            ]
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Selected State',
            bind: '{states.value}'
        }, {
            xtype: 'combobox',
            reference: 'states',
            publishes: 'value',
            fieldLabel: 'Select State',
            displayField: 'state',
            anchor: '-15',
            store: {
                type: 'states'
            },
            queryMode: 'local',
            listConfig: {
                itemTpl: [
                    '<div style="background-color:red;color:white;" data-qtip="{state}: {description}">{state} ({abbr})</div>'
                ]
            }
        }]
    }]
});
