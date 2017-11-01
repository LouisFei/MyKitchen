/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('MyKitchen.view.panel.BasicPanels', {
    extend: 'Ext.Container',
    xtype: 'basic-panels',

    requires: [
        'Ext.layout.container.Table'
    ],



    width: 880,
    layout: {
        type: 'table',
        columns: 4,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        height: 280,
        bodyPadding: 10
    },

    items: [{
        html: '一个十分朴素的panel面板<br/>一个十分朴素的panel面板'
    }, {
        title: '标题',
        html: '带标题的panel面板'
    }, {
        title: '可折叠的',
        collapsible: true,
        html:'带标题，可折叠展开的panel面板'
    }, {
        title: 'Light UI',
        collapsible: true,
        ui: 'light',
        hidden: false,
        html: '带标题，可折叠展开，指定了UI主题的panel面板'
    }, {
        title: '带工具按钮',
        collapsed: true,
        collapsible: true,
        width: 860,
        html: MyKitchen.DummyText.mediumText,
        tools: [
            { type: 'pin' },
            { type: 'refresh' },
            { type: 'search' },
            { type: 'save' }
        ],
        colspan: 4
    }, {
        title: 'Built in Tools in Light UI',
        collapsed: true,
        collapsible: false,
        width: 860,
        ui: 'light',
        hidden: false,
        html: MyKitchen.DummyText.mediumText,
        tools: [
            { type: 'pin' },
            { type: 'refresh' },
            { type: 'search' },
            { type: 'save' }
        ],
        colspan: 4
    }, {
        collapsed: true,
        collapsible: false,
        header: {
            enableFocusableContainer: false,
            title: {
                text: 'Custom Tools using iconCls',
                focusable: true,
                tabIndex: 0
            }
        },
        width: 860,
        html: MyKitchen.DummyText.mediumText,
        tools: [
            { iconCls: 'x-fa fa-wrench' },
            { iconCls: 'x-fa fa-reply' },
            { iconCls: 'x-fa fa-reply-all' },
            { iconCls: 'x-fa fa-rocket' }
        ],
        colspan: 4
    }, {
        collapsed: true,
        collapsible: false,
        ui: 'light',
        hidden: false,
        header: {
            enableFocusableContainer: false,
            title: {
                text: 'Custom Tools using iconCls in Light UI, 使用iconCls定义工具按钮，使用Light UI样式风格',
                focusable: true,
                tabIndex: 0
            }
        },
        width: 860,
        html: MyKitchen.DummyText.mediumText,
        tools: [
            { iconCls: 'x-fa fa-wrench' },
            { iconCls: 'x-fa fa-reply' },
            { iconCls: 'x-fa fa-reply-all' },
            { iconCls: 'x-fa fa-rocket' }
        ],
        colspan: 4
    }, {
        collapsed: true,
        collapsible: false,
        header: {
            enableFocusableContainer: false,
            title: {
                text: 'Custom Tools using glyph configuration',
                focusable: true,
                tabIndex: 0
            }
        },
        width: 860,
        html: MyKitchen.DummyText.mediumText,
        tools: [
            { glyph: 'xf0ad@FontAwesome' },
            { glyph: 'xf112@FontAwesome' },
            { glyph: 'xf122@FontAwesome' },
            { glyph: 'xf135@FontAwesome' }
        ],
        colspan: 4
    }, {
        collapsed: true,
        collapsible: false,
        ui: 'light',
        hidden: false,
        header: {
            enableFocusableContainer: false,
            title: {
                text: 'Custom Tools using glyph configuration in Light UI',
                focusable: true,
                tabIndex: 0
            }
        },
        width: 860,
        html: MyKitchen.DummyText.mediumText,
        tools: [
            { glyph: 'xf0ad@FontAwesome' },
            { glyph: 'xf112@FontAwesome' },
            { glyph: 'xf122@FontAwesome' },
            { glyph: 'xf135@FontAwesome' }
        ],
        colspan: 4
    }]
});
