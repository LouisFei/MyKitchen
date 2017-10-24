/**
 * This example shows how to use the date/month pickers.
 */
Ext.define('MyKitchen.view.form.Date', {
    extend: 'Ext.container.Container',
    xtype: 'form-date',
    controller: 'form-date',

    requires: [
        'Ext.panel.Panel',
        'Ext.picker.Date',
        'Ext.picker.Month',
        'Ext.layout.container.VBox',
        'Ext.layout.container.HBox'
    ],

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'samples/view/form/DateController.js'
    }],
    profiles: {
        classic: {
            width: 400
        },
        neptune: {
            width: 465
        },
        'neptune-touch': {
            width: 600
        },
        'triton': {
            width: 750
        }
    },
    //</example>

    //width: '${width}',
    width: 750,
    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 0 20 0',
        items: [{
            title: '日期选择器',
            margin: '0 20 0 0',
            items: {
                xtype: 'datepicker',
                handler: 'onDatePicked'
            }
        }, {
            title: '月份选择器',
            items: {
                xtype: 'monthpicker',
                handler: 'onMonthPicked'
            }
        }]
    }, {
        xtype: 'container',
        layout: 'hbox',
        items: [{
            title: '日期选择器 (没有今天按钮)',
            margin: '0 20 0 0',
            items: {
                xtype: 'datepicker',
                showToday: false,
                handler: 'onDatePicked'
            }
        }, {
            title: '月份选择器 (没有按钮)',
            items: {
                xtype: 'monthpicker',
                showButtons: false,
                handler: 'onMonthPicked'
            }
        }]
    }]
});
