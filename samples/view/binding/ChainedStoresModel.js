//<example>
Ext.require('MyKitchen.model.Person', function() {
    //</example>
    Ext.define('MyKitchen.view.binding.ChainedStoresModel', {
        extend: 'Ext.app.ViewModel',
        alias: 'viewmodel.binding.chainedstores',
    
        data: {
            //最小年龄
            minimumAge: 18
        },
        stores: {
            everyone: {
                model: 'Person',
                data: MyKitchen.model.Person.generateData(15, 10)
            },
            adults: {
                source: '{everyone}',
                filters: [{
                    property: 'age',
                    value: '{minimumAge}',
                    operator: '>='
                }],
                sorters: [{
                    property: 'age',
                    direction: 'ASC'
                }]
            }
        }
    });
    //<example>
    });
    //</example>