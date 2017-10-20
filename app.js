/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyKitchen.Application',

    name: 'MyKitchen',

    // requires: [
    //     // This will automatically load all classes in the MyKitchen namespace
    //     // so that application classes do not need to require each other.
    //     'MyKitchen.*'
    // ],

    // The name of the initial view to create.
    //mainView: 'MyKitchen.view.main.Main'
});
