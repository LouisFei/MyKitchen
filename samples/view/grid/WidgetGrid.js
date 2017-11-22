/**
 * This example shows how to use Widgets and Components in grid columns.
 * 这个示例显示如何在表格列中使用部件和组件。
 * 
 * Widgets are lightweight components with a simpler lifecycle.
 * 部件拥有简单的生命周期的轻量级的组件。
 *
 * Both Widgets and Components in widget columns have their lifecycle automatically managed.
 * 在部件列中的部件和组件有他们自己的自动管理的生命周期。
 * They are created on demand, and will be destroyed when the grid is destroyed.
 *
 * When buffered rendering is used, widgets and components from rows which are scrolled
 * out of view are repurposed and inserted into the rows which are scrolling into view.
 *
 * Each grid row is represented by a ViewModel, and this is used by all managed
 * components and widgets to access application data. The ViewModel contains
 * two properties:
 * 每一个表格行通过一个视图模型展现，
 * 视图模型包含两个属性：
 *
 *    * record The record which backs the grid row.
 *    * recordIndex The index in the dataset of the record which backs the grid row.
 *
 * This means that a `widget` configuration can specify a bind config to access
 * its contextual record.
 */
Ext.define('MyKitchen.view.grid.WidgetGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Action',
        'Ext.ProgressBarWidget',
        'Ext.slider.Widget',
        'Ext.sparkline.*'
    ],
    xtype: 'widget-grid',

    store: 'Widgets',

    collapsible: true,
    height: 350,
    width: 1050,
    title: 'Widget Grid',
    viewConfig: {
        stripeRows: true,
        enableTextSelection: false,
        markDirty: false
    },
    trackMouseOver: false,
    disableSelection: true,

    //<example>
    otherContent: [{
        type: 'Store',
        path: 'samples/store/Widgets.js'
    },{
        type: 'Model',
        path: 'samples/model/Widget.js'
    }],
    //</example>
    
    columns: [
        {
            text: 'Button',
            width: 120,
            xtype: 'widgetcolumn',
            widget: {
                textAlign: 'left',
                bind: '{record.progress}',
                xtype: 'splitbutton',
                iconCls: 'widget-grid-user',
                handler: 'onButtonWidgetClick'
            }
        }, 
        {
            text     : 'Progress',
            xtype    : 'widgetcolumn',
            width    : 120,
            widget: {
                bind: '{record.progress}',
                xtype: 'progressbarwidget',
                textTpl: [
                    '{percent:number("0")}% done'
                ]
            }
        }, 
        {
            text: 'Run Mode',
            width: 150,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'combo',
                bind: '{record.mode}',
                store: [
                    'Local',
                    'Remote'
                ]
            }
        }, 
        {
            text     : 'Slider',
            xtype    : 'widgetcolumn',
            width    : 120,
            widget: {
                xtype: 'sliderwidget',
                minValue: 0,
                maxValue: 1,
                bind: '{record.progress}',
                publishOnComplete: false,
                decimalPrecision: 2
            }
        }, 
        {
            text: 'Line',
            width: 100,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'sparklineline',
                bind: '{record.sequence1}',
                tipTpl: 'Value: {y:number("0.00")}'
            }
        }, 
        {
            text: 'Bar',
            width: 100,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'sparklinebar',
                bind: '{record.sequence2}'
            }
        }, 
        {
            text: 'Discrete',
            width: 100,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'sparklinediscrete',
                bind: '{record.sequence3}'
            }
        }, 
        {
            text: 'Bullet',
            width: 100,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'sparklinebullet',
                bind: '{record.sequence4}'
            }
        }, 
        {
            text: 'Pie',
            width: 60,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'sparklinepie',
                bind: '{record.sequence5}'
            }
        }, 
        {
            text: 'Box',
            width: 100,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'sparklinebox',
                bind: '{record.sequence6}'
            }
        }, 
        {
            text: 'TriState',
            width: 100,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'sparklinetristate',
                bind: '{record.sequence7}'
            }
        }
    ],

    // Dispatch named listener and handler methods to this instance
    defaultListenerScope: true,
    
    listeners: {
        columnshow: 'onColumnToggle',
        columnhide: 'onColumnToggle'
    },
    
    /**
     * 按钮部件点击事件处理
     */
    onButtonWidgetClick: function(btn) {
        var rec = btn.lookupViewModel().get('record');
        Ext.Msg.alert("Button clicked", "Hey! " + rec.get('name'));
    },

    onButtonToggle: function(btn, pressed) {
        if (this.processing) {
            return;
        }

        this.processing = true;
        var header = this.headerCt.child('[text=' + btn.text + ']');
        header.setVisible(pressed);
        this.processing = false;
    },

    onColumnToggle: function(headerCt, header) {
        if (this.processing) {
            return;
        }
        this.processing = true;
        var btn = this.down('toolbar').child('[text=' + header.text + ']');
        btn.setPressed(header.isVisible());
        this.processing = false;
    }
}, function(WidgetGrid) {
    var prototype = WidgetGrid.prototype,
        columns = prototype.columns,
        len = columns.length,
        i,
        tbar = prototype.tbar = [];

    // Create tbar on the prototype with a button for each column
    // 创建顶部工具条
    for (i = 0; i < len; i++) {
        tbar.push({
            text: columns[i].text,
            enableToggle: true,
            pressed: true,
            toggleHandler: 'onButtonToggle'
        });
    }
});
