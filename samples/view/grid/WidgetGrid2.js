/**
 * 从ExtJS Widget源码里挖出来的示例。
 */
Ext.define('MyKitchen.view.grid.WidgetGrid2', {
    extend: 'Ext.grid.Panel',

    xtype: 'widget-grid2',

    height: 350,
    width: 600,
    title: 'Substation power monitor',
    viewConfig: {
        enableTextSelection: false,
        markDirty: false
    },

    columns: [
        {
            text: 'Id',
            dataIndex: 'id',
            width: 120
        },
        {
            text: 'Rating',
            dataIndex: 'maxCapacity',
            width: 80
        },
        {
            text: 'Avg.',
            dataIndex: 'avg',
            width: 85,
            formatter: 'number("0.00")'
        }, 
        {
            text: 'Max',
            dataIndex: 'max',
            width: 80
        }, 
        {
            text: 'Instant',
            dataIndex: 'instant',
            width: 80
        }, 
        {
            text: '%Capacity',
            width: 150,

            // This is our Widget column
            // 这是我们的部件列
            xtype: 'widgetcolumn',

            // This is the widget definition for each cell.
            // 这是为每个单元格定义部件列.
            // The Progress widget class's defaultBindProperty is 'value'
            // so its "value" setting is taken from the ViewModel's record "capacityUsed" field
            // Note that a row ViewModel will automatically be injected due to the existence of 
            // the bind property in the widget configuration.
            widget: {
                xtype: 'progressbarwidget',
                bind: '{record.capacityUsed}',
                textTpl: [
                    '{percent:number("0")}% capacity'
                ]
            }
        }],

        disableSelection: true,
        store: {
            fields: [
                {
                    name: 'id',
                    type: 'string'
                },
                {
                    name: 'maxCapacity',
                    type: 'int'
                },
                {
                    name: 'avg',
                    type: 'int',
                    calculate: function (data) {
                        // Make this depend upon the instant field being set which sets the sampleCount and total.
                        // Use subscript format to access the other pseudo fields which are set by the instant field's converter
                        return data.instant && data['total'] / data['sampleCount'];
                    }
                },
                {
                    name: 'max',
                    type: 'int',
                    calculate: function (data) {
                        // This will be seen to depend on the "instant" field.
                        // Use subscript format to access this field's current value to avoid circular dependency error.
                        return (data['max'] || 0) < data.instant ? data.instant : data['max'];
                    }
                },
                {
                    name: 'instant',
                    type: 'int',

                    // Upon every update of instantaneous power throughput,
                    // update the sample count and total so that the max field can calculate itself
                    convert: function (value, rec) {
                        rec.data.sampleCount = (rec.data.sampleCount || 0) + 1;
                        rec.data.total = (rec.data.total || 0) + value;
                        return value;
                    },
                    depends: []
                },
                {
                    name: 'capacityUsed',
                    calculate: function (data) {
                        return data.instant / data.maxCapacity;
                    }
                }],
            data: [
                {
                    id: 'Substation A',
                    maxCapacity: 1000,
                    avg: 770,
                    max: 950,
                    instant: 685
                },
                {
                    id: 'Substation B',
                    maxCapacity: 1000,
                    avg: 819,
                    max: 992,
                    instant: 749
                },
                {
                    id: 'Substation C',
                    maxCapacity: 1000,
                    avg: 588,
                    max: 936,
                    instant: 833
                },
                {
                    id: 'Substation D',
                    maxCapacity: 1000,
                    avg: 639,
                    max: 917,
                    instant: 825
                }]
        }

});
