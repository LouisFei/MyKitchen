Ext.define('MyKitchen.view.form.DateController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form-date',

    onDatePicked: function(picker, date) {
        //MyKitchen.toast('You picked ' + Ext.Date.format(date, 'd-M-Y'));
        MyKitchen.toast('您选中的日期是：' + Ext.Date.format(date, 'Y年m月d日'));
    },

    onMonthPicked: function(picker, date) {
        //MyKitchen.toast('You picked ' + Ext.Date.format(date, 'd-M-Y'));
        MyKitchen.toast('您选中的日期是：' + Ext.Date.format(date, 'Y年m月d日'));
    },
    

});
