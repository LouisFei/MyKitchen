/**
 * 从ExtJS Widget源码里挖出来的示例。
 */
Ext.define('MyKitchen.view.grid.WidgetGrid3', {
    extend: 'Ext.grid.Panel',

    xtype: 'widget-grid3',

    height: 350,
    width: 250,
    title: 'Student progress report',
    disableSelection: true,

    store: {
        fields: ['name', 'isHonorStudent'],
        data: [{
            name: 'Finn',
            isHonorStudent: true
        }, {
            name: 'Jake',
            isHonorStudent: false
        }]
    },

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }, {
        xtype: 'widgetcolumn',
        text: 'Honor Roll',
        dataIndex: 'isHonorStudent',
        width: 150,
        widget: {
            xtype: 'button',
            handler: function () {
                // print certificate handler
            }
        },
        // called when the widget is initially instantiated
        // on the widget column
        onWidgetAttach: function (col, widget, rec) {
            widget.setText('Print Certificate');
            widget.setDisabled(!rec.get('isHonorStudent'));
        }
    }]

 });
