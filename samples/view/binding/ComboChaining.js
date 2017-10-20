/**
 * This example shows how to chain two combo boxes together.
 */
Ext.define('MyKitchen.view.binding.ComboChaining', {
    extend: 'Ext.panel.Panel',
    xtype: 'binding-combo-chaining',

    //<example>
    otherContent: [{
        type: 'Store',
        path: 'app/store/Countries.js'
    },{
        type: 'Store',
        path: 'app/store/CountryStates.js'
    },{
        type: 'Model',
        path: 'app/model/tree/Country.js'
    },{
        type: 'Model',
        path: 'app/model/State.js'
    }],
    bodyPadding: 10,
    //</example>

    width: 350,
    layout: 'anchor',
    defaults: { anchor: '-30' },

    referenceHolder: true,
    viewModel: true,

    title: '地理位置',

    items: [{
        xtype: 'combo',
        fieldLabel: '国家',
        reference: 'country',
        displayField: 'name',
        valueField: 'name',
        publishes: 'value',
        store: {
            type: 'countries'
        }
    },{
        xtype: 'combo',
        fieldLabel: '省/州',
        displayField: 'state',
        valueField: 'abbrev',
        queryMode: 'remote',
        forceSelection: true,
        bind: {
            visible: '{country.value}',
            filters: {
                property: 'country',
                value: '{country.value}'
            }
        },
        store: {
            type: 'country-states'
        }
    }]
});
