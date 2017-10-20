/**
 * This example demonstrates a chained store, a store that is backed by the data of another
 * store. Sorting and filtering of the stores are independent. Removing a value in the source
 * store removes it from the chained store. Model instances are shared, so editing the data
 * in one store will be reflected in the other.
 */
Ext.define('MyKitchen.view.binding.ChainedStores', {
    extend: 'Ext.container.Container',
    xtype: 'binding-chained-stores',

    //<example>
    requires: [
        'Ext.layout.container.VBox',
        'Ext.layout.container.HBox',
        'Ext.grid.Panel',

        'MyKitchen.model.Person',
        'MyKitchen.view.binding.ChainedStoresModel',
        'MyKitchen.view.binding.ChainedStoresController'
    ],
    otherContent: [{
        type: 'ViewModel',
        path: 'samples/view/binding/ChainedStoresModel.js'
    }, {
        type: 'Controller',
        path: 'samples/view/binding/ChainedStoresController.js'
    }, {
        type: 'Model',
        path: 'samples/model/Person.js'
    }],
    //</example>

    width: 680,
    height: 600,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    viewModel: 'binding.chainedstores',

    controller: 'binding.chainedstores',

    items: [{
        xtype: 'grid',
        bind: '{everyone}',
        title: '全部人员',
        flex: 1,
        columns: [{
            dataIndex: 'firstName',
            text: 'First Name',
            flex: 1,
            field: 'textfield'
        }, {
            dataIndex: 'lastName',
            text: 'Last Name',
            flex: 1,
            field: 'textfield'
        }, {
            dataIndex: 'age',
            text: 'Age',
            width: 120,
            field: 'numberfield',
            align: 'right'
        }, {
            dataIndex: 'favoriteColor',
            text: '喜欢的颜色',
            flex: 1,
            renderer: 'renderColor',
            field: 'textfield'
        }, {
            xtype: 'widgetcolumn',
            width: 110,
            widget: {
                xtype: 'button',
                text: '删除',
                handler: 'onRemoveClick'
            }
        }],
        plugins: {
            rowediting: {
                listeners: {
                    edit: 'onEditComplete'
                }
            }
        }
    }, {
        xtype: 'grid',
        bind: {
            store: '{adults}',
            title: '显示年龄大于等于{minimumAge}的人员'
        },
        flex: 1,
        reference: 'adultsGrid',
        margin: '10 0 0 0',
        tbar: [{
            xtype: 'slider',
            fieldLabel: '最小年龄',
            width: 300,
            bind: '{minimumAge}'
        }],
        columns: [{
            dataIndex: 'firstName',
            text: 'First Name',
            flex: 1
        }, {
            dataIndex: 'lastName',
            text: 'Last Name',
            flex: 1
        }, {
            dataIndex: 'age',
            text: 'Age',
            width: 120,
            align: 'right'
        }, {
            dataIndex: 'favoriteColor',
            text: 'Fav. Color',
            flex: 1,
            renderer: 'renderColor'
        }]
    }]
});
