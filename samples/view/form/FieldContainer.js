/**
 * The FieldContainer\'s child items are arranged like in any other container, using the
 * layout configuration property. In this example, each FieldContainer is set to use an
 * HBox layout.
 *
 * FieldContainers can be configured with the combineErrors option, which combines errors
 * from the sub fields and presents them at the container level. In this example the
 * Availability, Phone and Full Name items have this option enabled, and the Time worked
 * item does not.
 */
Ext.define('MyKitchen.view.form.FieldContainer', {
    extend: 'Ext.form.Panel',
    xtype: 'form-fieldcontainer',
    controller: 'form-fieldcontainer',

    //<example>
    requires: [
        'MyKitchen.model.PartTimeEmployee',
        'MyKitchen.view.form.FieldContainerController'
    ],

    exampleTitle: 'Field Container',
    otherContent: [{
        type: 'Model',
        path: 'samples/model/PartTimeEmployee.js'
    }, {
        type: 'Controller',
        path: 'samples/view/form/FieldContainerController.js'
    }],
    //</example>

    title: '员工信息',
    width: 600,
    bodyPadding: 10,
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },
    items: [{
        xtype: 'textfield',
        name: 'email',
        fieldLabel: '邮件地址',
        vtype: 'email',
        msgTarget: 'side',
        allowBlank: false
    }, {
        xtype: 'fieldcontainer',  //Ext.form.FieldContainer
        fieldLabel: '有效时间',
        combineErrors: true,
        msgTarget : 'side',
        layout: 'hbox',
        defaults: {
            flex: 1,
            hideLabel: true,
            format: 'Y年m月d日'
        },
        items: [{
            xtype: 'datefield',
            name: 'startDate',
            fieldLabel: '开始',
            margin: '0 5 0 0',
            allowBlank: false
        }, {
            xtype     : 'datefield',
            name      : 'endDate',
            fieldLabel: '结束',
            allowBlank: false
        }]
    }, {
        xtype: 'fieldset',
        title: '详情',
        collapsible: true,
        defaults: {
            labelWidth: 90,
            anchor: '100%',
            layout: 'hbox'
        },
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: '联系电话',
            combineErrors: true,
            msgTarget: 'under',
            defaults: {
                hideLabel: true,
                enforceMaxLength: true,
                maskRe: /[0-9.]/
            },
            items: [
                {xtype: 'displayfield', value: '(', margin: '0 2 0 0'},
                {xtype: 'textfield',    fieldLabel: 'Phone 1', name: 'phone-1', width: 45, allowBlank: false, maxLength: 3},
                {xtype: 'displayfield', value: ')', margin: '0 5 0 2'},
                {xtype: 'textfield',    fieldLabel: 'Phone 2', name: 'phone-2', width: 45, allowBlank: false, margin: '0 5 0 0', maxLength: 3},
                {xtype: 'displayfield', value: '-'},
                {xtype: 'textfield',    fieldLabel: 'Phone 3', name: 'phone-3', width: 60, allowBlank: false, margin: '0 0 0 5', maxLength: 4}
            ]
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: '已工作时间',
            combineErrors: false,
            defaults: {
                hideLabel: true,
                margin: '0 5 0 0'
            },
            items: [{
               name : 'hours',
               xtype: 'numberfield',
               minValue: 0,
               width: 95,
               allowBlank: false
           }, {
               xtype: 'displayfield',
               //value: 'hours'
               value: '小时'
           }, {
               name : 'minutes',
               xtype: 'numberfield',
               minValue: 0,
               width: 95,
               allowBlank: false
           }, {
               xtype: 'displayfield',
               //value: 'mins'
               value: '分钟'
            }]
        }, {
            xtype : 'fieldcontainer',
            combineErrors: true,
            msgTarget: 'side',
            fieldLabel: '全名',
            defaults: {
                hideLabel: true,
                margin: '0 5 0 0'
            },
            items: [{
                //the width of this field in the HBox layout is set directly
                //the other 2 items are given flex: 1, so will share the rest of the space
                width: 75,
                xtype: 'combo',
                queryMode: 'local',
                value: 'mrs',
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                fieldLabel: 'Title',
                name: 'title',
                displayField: 'name',
                valueField: 'value',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name : 'Mr',   value: 'mr'},
                        {name : 'Mrs',  value: 'mrs'},
                        {name : 'Miss', value: 'miss'}
                    ]
                }
            }, {
                xtype: 'textfield',
                flex : 1,
                name : 'firstName',
                fieldLabel: 'First',
                allowBlank: false
            }, {
                xtype: 'textfield',
                flex : 1,
                name : 'lastName',
                fieldLabel: 'Last',
                allowBlank: false
            }]
        }]
    }],
    
    buttons: [{
        text   : '加载测试数据',
        handler: 'onLoadClick'
    }, {
        text   : '保存',
        handler: 'onSaveClick'
    }, {
        text   : '重置',
        handler: 'onResetClick'
    }]
});