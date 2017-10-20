/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyKitchen.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'border',
    stateful: true,
    stateId: 'mykitchen-viewport',

    items: [{
        region: 'north',
        xtype: 'appHeader'
    }, {
        region: 'center',
        xtype: 'contentPanel',
        reference: 'contentPanel',
        ariaRole: 'main',
        dockedItems: [{
            xtype: 'navigation-toolbar'
        }]
    }, {
        xtype: 'codePreview',
        region: 'east',
        id: 'east-region',
        itemId: 'codePreview',
        stateful: true,
        stateId: 'mainnav.east',
        split: true,
        collapsible: true,
        collapsed: true,
        width: 350,
        minWidth: 100
    }],

    applyState: function(state) {
        this.getController().applyState(state);

    },

    getState: function() {
        return this.getController().getState();
    }
});
