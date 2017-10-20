Ext.define('MyKitchen.model.tree.Country', {
    extend: 'MyKitchen.model.tree.Base',
    entityName: 'Country',
    idProperty: 'name',
    glyph: 'xf024@FontAwesome',
    fields: [{
        name: 'name',
        convert: undefined
    },{
        name: 'iconCls',
        defaultValue: 'x-fa fa-flag'
    }]
});
