Ext.define('MyKitchen.model.tree.Territory', {
    extend: 'MyKitchen.model.tree.Base',
    entityName: 'Territory',
    idProperty: 'name',
    glyph: 'xf0ac@FontAwesome',
    fields: [{
        name: 'name',
        convert: undefined
    },{
        name: 'iconCls',
        defaultValue: 'x-fa fa-globe'
    }]
});
