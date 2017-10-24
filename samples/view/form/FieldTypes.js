/**
 * This example shows examples of the various supported form field types.
 */
Ext.define('MyKitchen.view.form.FieldTypes', {
    extend: 'Ext.form.Panel',
    xtype: 'form-fieldtypes',

    //<example>
    requires: [
        'Ext.form.field.*'
    ],

    exampleTitle: 'Form Field Types',
    //</example>

    frame: true,
    title: '表单字段',
    width: 400,
    bodyPadding: 10,
    layout: 'form',

    items: [{
        xtype: 'textfield',
        name: 'textfield1',
        fieldLabel: '单行文本输入框',
        value: 'Text field value'
    }, {
        xtype: 'hiddenfield',
        name: 'hidden1',
        value: '隐藏域'
    },{
        xtype: 'textfield',
        name: 'password1',
        inputType: 'password',
        fieldLabel: '密码输入框'
    }, {
        xtype: 'filefield',
        name: 'file1',
        buttonText: '浏览…',
        fieldLabel: '文件上传'
    }, {
        xtype: 'textareafield',
        name: 'textarea1',
        fieldLabel: '多行文本域',
        value: 'Textarea value'
    }, {
        xtype: 'displayfield',
        name: 'displayfield1',
        fieldLabel: '只读文本',
        value: 'Display field <span style="color:green;">value</span>'
    }, {
        xtype: 'numberfield',
        name: 'numberfield1',
        fieldLabel: '数字',
        value: 5,
        minValue: 0,
        maxValue: 50
    }, {
        xtype: 'checkboxfield',
        name: 'checkbox1',
        fieldLabel: '复选框',
        boxLabel: 'box label'
    }, {
        xtype: 'radiofield',
        name: 'radio1',
        value: 'radiovalue1',
        fieldLabel: '单选框',
        boxLabel: 'radio 1'
    }, {
        xtype: 'radiofield',
        name: 'radio1',
        value: 'radiovalue2',
        fieldLabel: '',
        labelSeparator: '',
        hideEmptyLabel: false,
        boxLabel: 'radio 2'
    }, {
        xtype: 'datefield',
        name: 'date1',
        fieldLabel: '日期选择'
    }, {
        xtype: 'timefield',
        name: 'time1',
        fieldLabel: '时间选择',
        minValue: '1:30 AM',
        maxValue: '9:15 PM'
    }]
});
