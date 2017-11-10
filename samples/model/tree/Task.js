Ext.define('MyKitchen.model.tree.Task', {
    extend: 'MyKitchen.model.tree.Base',
    fields: [{
        name: 'task',
        type: 'string'
    }, {
        name: 'user',
        type: 'string'
    }, {
        name: 'duration',
        type: 'float'
    }, {
        name: 'done',
        type: 'boolean'
    }]
}); 