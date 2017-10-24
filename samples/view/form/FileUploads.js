/**
 * This example demonstrates use of Ext.form.field.File, a file upload field with custom
 * rendering, and error handling.
 */
Ext.define('MyKitchen.view.form.FileUploads', {
    extend: 'Ext.container.Container',
    xtype: 'form-fileuploads',
    controller: 'form-fileuploads',
    
    //<example>
    requires: [
        'MyKitchen.view.form.FileUploadsController'
    ],
    
    exampleTitle: 'File Upload fields',
    otherContent: [{
        type: 'Controller',
        path: 'samples/view/form/FileUploadsController.js'
    }],
    //</example>
    
    width: 600,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    defaults: {
        xtype: 'form',
        layout: 'anchor',

        bodyPadding: 10,
        style: {
            'margin-bottom': '20px'
        },
        
        defaults: {
            anchor: '100%'
        }
    },
    
    items: [{
        items: [{
            xtype: 'component',
            html: [
                '<h3>Basic File Field，基本的文件上传字段</h3>',
                '<p>A typical file upload field with Ext style. Direct editing ',
                'of the text field cannot be done in a consistent, cross-browser way, ',
                'so it is always read-only. The file path reported by the ',
                '<code>getValue</code> method will depend on the browser and cannot ',
                'be controlled by Ext JS.'
            ]
        }, {
            xtype: 'filefield',
            hideLabel: true,
            buttonText: '浏览…',
            reference: 'basicFile'
        }, {
            xtype: 'button',
            text: 'Get File Path',
            handler: 'getFilePath'
        }]
    }, {
        items: [{
            xtype: 'component',
            html: [
                '<h3>Button Only， 只有文件上传按钮</h3>',
                '<p>You can also render the file input as a button without ',
                'the text field, with access to the field\'s value via the ',
                'standard <tt>Ext.form.field.Field</tt> interface or by handling ',
                'the <tt>change</tt> event (as in this example).',
                '</p>'
            ]
        }, {
            xtype: 'fileuploadfield', // Same as filefield above
            buttonOnly: true,
            hideLabel: true,
            listeners: {
                change: 'buttonOnlyChange'
            }
        }]
    }, {
        title: 'File Upload Form，文件上传表单',
        frame: true,
        bodyPadding: '10 10 0',
        reference: 'firstForm',

        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 50
        },

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name'
        }, {
            xtype: 'filefield',
            emptyText: 'Select an image',
            fieldLabel: 'Photo',
            name: 'photo-path',
            buttonText: '',
            buttonConfig: {
                iconCls: 'file-uploads-image-add'
            }
        }],

        buttons: [{
            text: 'Save',
            handler: 'firstFormSave'
        }, {
            text: 'Reset',
            handler: 'firstFormReset'
        }]
    }, {
        title: 'Upload error test，上传错误测试',
        frame: true,
        bodyPadding: '10 10 0',
        reference: 'secondForm',

        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 70
        },

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name'
        }, {
            xtype: 'filefield',
            emptyText: 'Select an image',
            fieldLabel: 'Photo',
            name: 'photo-path',
            buttonConfig: {
                text : '',
                iconCls: 'file-uploads-image-add'
            }
        }, {
            xtype: 'numberfield',
            fieldLabel: 'HTTP status',
            value: 200,
            minValue: 200,
            maxValue: 599,
            name: 'returnResponse'
        }],

        buttons: [{
            text: 'Save',
            handler: 'secondFormSubmit'
        }, {
            text: 'Reset',
            handler: 'secondFormReset'
        }]
    }]
});
