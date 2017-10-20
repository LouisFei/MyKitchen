Ext.define('MyKitchen.model.tree.City', {
    extend: 'MyKitchen.model.tree.Base',
    entityName: 'City',
    idProperty: 'name',
    glyph: 'xf19c@FontAwesome',
    fields: [{
        name: 'name',
        convert: undefined
    },{
        name: 'iconCls',
        defaultValue: 'x-fa fa-bank'
    }]
});
