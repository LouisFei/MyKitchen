/**
 * This Form demonstrates the fact that by virtue of inheriting from the Ext.Container
 * class, an Ext.form.Panel can contain any Ext.Component. This includes all the
 * subclasses of Ext.Panel, including the GridPanel.
 *
 * The Grid demonstrates the use of creation of derived fields in a Record created using a
 * custom `convert` function, and the use of column renderers.
 *
 * The Form demonstrates the use of radio buttons grouped by name being set by the value
 * of the derived rating field.
 */
Ext.define('MyKitchen.view.form.FormGrid', {
    extend: 'Ext.form.Panel',
    xtype: 'form-grid',
    controller: 'form-grid',

    requires: [
        'Ext.grid.*',
        'Ext.form.*',
        'Ext.layout.container.Column',
        'MyKitchen.model.Company'
    ],

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'samples/view/form/FormGridController.js'
    }],
    profiles: {
        classic: {
            width: 750,
            gridWidth: 0.6,
            formWidth: 0.4,
            percentChangeColumnWidth: 75,
            lastUpdatedColumnWidth: 85,
            ratingColumnWidth: 30,
            green: 'green',
            red: 'red'
        },
        neptune: {
            width: 880,
            gridWidth: 0.65,
            formWidth: 0.35,
            percentChangeColumnWidth: 100,
            lastUpdatedColumnWidth: 115,
            ratingColumnWidth: 60,
            green: '#73b51e',
            red: '#cf4c35'
        }
    },
    //</example>
    
    title: '公司数据',
    //width: '${width}',
    width: 880,
    frame: true,
    bodyPadding: 5,
    layout: 'column',
    // signTpl: '<span style="' +
    //         'color:{value:sign(\'${red}\',\'${green}\')}"' +
    //     '>{text}</span>',
    signTpl: '<span style="' +
        'color:{value:sign(\'#cf4c35\',\'#73b51e\')}"' +
    '>{text}</span>',


    viewModel: {
        data: {
            theCompany: null
        }
    },

    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%',
        msgTarget: 'side'
    },

    items: [{
        xtype: 'gridpanel',

        height: 400,
        //columnWidth: '${gridWidth}',
        columnWidth: 0.65,

        bind: {
            selection: '{theCompany}'
        },
        store: {
            type: 'companies'
        },

        columns: [{
            text: 'Company',
            dataIndex: 'name',

            flex: 1,
            sortable: true
        }, {
            text: 'Price',
            dataIndex: 'price',

            width: 75,
            sortable: true
        }, {
            text: 'Change',
            dataIndex: 'priceChange',

            width: 80,
            sortable: true,
            renderer: 'renderChange'
        }, {
            text: '% Change',
            dataIndex: 'priceChangePct',

            //width: '${percentChangeColumnWidth}',
            width: 100,
            sortable: true,
            renderer: 'renderPercent'
        }, {
            text: 'Last Updated',
            dataIndex: 'priceLastChange',

            //width: '${lastUpdatedColumnWidth}',
            width: 115,
            sortable: true,
            formatter: 'date("m/d/Y")'
        }, {
            text: 'Rating',
            dataIndex: 'rating',

            //width: '${ratingColumnWidth}',
            width: 60,
            sortable: true,
            formatter: 'pick("A","B","C")'
        }]
    }, {
        xtype: 'fieldset',
        title:'公司详细',

        //columnWidth: '${formWidth}',
        columnWidth: 0.35,
        margin: '0 0 0 10',
        layout: 'anchor',
        defaultType: 'textfield',

        items: [{
            fieldLabel: 'Name',
            bind: '{theCompany.name}'
        }, {
            fieldLabel: 'Price',
            bind: '{theCompany.price}'
        }, {
            fieldLabel: '% Change',
            bind: '{theCompany.priceChangePct}'
        }, {
            xtype: 'radiogroup',
            fieldLabel: 'Rating',
            bind: '{theCompany.rating}',

            // Maps the value of this radiogroup to the child radio with matching
            // inputValue.
            simpleValue: true,
            columns: 3,

            items: [{
                boxLabel: 'A',
                inputValue: 0
            }, {
                boxLabel: 'B',
                inputValue: 1
            }, {
                boxLabel: 'C',
                inputValue: 2
            }]
        }, {
            labelAlign: 'top',
            xtype: 'datefield',
            format: 'Y年m月d日', 
            fieldLabel: 'Last Updated (Not editable)',
            labelSeparator: '',
            bind: '{theCompany.priceLastChange}',

            // This field is only set when the price changes
            // The Model rejects set changes.
            readOnly: true
        }]
    }]
});
