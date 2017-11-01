Ext.define('MyKitchen.view.panel.PanelHeader', {
    extend: 'Ext.Container',
    xtype: 'panel-header', 

    

    items: [{
        title: '标题',
        width: 880,
        height: 400,

        //ui: 'Light UI',

        tools: [{
            type: 'pin'
        }],

        header: {
            title: '我也是标题，我优先级高',
            items: [{
                xtype: 'button',
                text: 'Header Button'
            }]
        },

        html: '带标题的panel面板'
    } ]
});
