Ext.define('MyKitchen.view.form.FieldContainerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form-fieldcontainer',
    
    requires: [
        'MyKitchen.model.PartTimeEmployee'
    ],

    onLoadClick: function() {
        this.getView().loadRecord(Ext.create('MyKitchen.model.PartTimeEmployee', {
            'email'    : 'abe@sencha.com',
            'title'    : 'mr',
            'firstName': 'Abraham',
            'lastName' : 'Elias',
            'startDate': '01/10/2003',
            'endDate'  : '12/11/2009',
            'phone-1'  : '555',
            'phone-2'  : '123',
            'phone-3'  : '4567',
            'hours'    : 7,
            'minutes'  : 15
        }));
    },

    onSaveClick: function() {
        var form   = this.getView(),
            encode = Ext.String.htmlEncode,
            s      = '';

        if (form.isValid()) {
            Ext.iterate(form.getValues(), function(key, value) {
                value = encode(value);
                
                s += Ext.util.Format.format("{0} = {1}<br />", key, value);
            }, this);

            Ext.Msg.alert('表单值集合', s);
        }
    },

    onResetClick: function() {
        this.getView().reset();
    }
});