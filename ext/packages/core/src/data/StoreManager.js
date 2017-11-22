/**
 * Contains a collection of all stores that are created that have an identifier. An identifier can be assigned by
 * setting the {@link Ext.data.AbstractStore#storeId storeId} property. When a store is in the StoreManager, it can be
 * referred to via it's identifier:
 * 
 * 包含一个集合，所有的store被创建后有一个标识。
 * 一个标识能被分配给storeId属性。
 * 当一个store在Store管理器中时，它能被通过它的标识引用。
 *
 *     Ext.create('Ext.data.Store', {
 *         model: 'SomeModel',
 *         storeId: 'myStore'
 *     });
 *
 *     var store = Ext.data.StoreManager.lookup('myStore');
 *
 * Also note that the {@link #lookup} method is aliased to {@link Ext#getStore} for convenience.
 * 注意，lookup方法还有一个快捷方法叫Ext.getStore
 *
 * If a store is registered with the StoreManager, you can also refer to the store by it's identifier when registering
 * it with any Component that consumes data from a store:
 *
 *     Ext.create('Ext.data.Store', {
 *         model: 'SomeModel',
 *         storeId: 'myStore'
 *     });
 *
 *     Ext.create('Ext.view.View', {
 *         store: 'myStore',
 *         // other configuration here
 *     });
 *
 */
Ext.define('Ext.data.StoreManager', {
    extend: 'Ext.util.MixedCollection',
    alternateClassName: [
        'Ext.StoreMgr',
        'Ext.data.StoreMgr',
        'Ext.StoreManager'
    ],

    //单例
    singleton: true,

    requires: [
        'Ext.data.ArrayStore'
    ],
    
    /**
     * @cfg {Object} listeners
     * @private
     */

    /**
     * Registers one or more Stores with the StoreManager. You do not normally need to register stores manually. Any
     * store initialized with a {@link Ext.data.Store#storeId} will be auto-registered.
     * @param {Ext.data.Store...} stores Any number of Store instances
     * 
     * 注册一个或多个store到管理器中。你通常不需要手头注册。
     * 任务一个拥有storeId值的store都将被自动注册。
     */
    register: function() {
        for (var i = 0, s; (s = arguments[i]); i++) {
            this.add(s);
        }
    },

    /**
     * Unregisters one or more Stores with the StoreManager
     * @param {String/Object...} stores Any number of Store instances or ID-s
     * 取消注册
     */
    unregister: function() {
        for (var i = 0, s; (s = arguments[i]); i++) {
            this.remove(this.lookup(s));
        }
    },

    /**
     * 通过storeId获得已注册的store
     * Gets a registered Store by id
     * @param {String/Object} store The id of the Store, or a Store instance, or a store configuration
     * @param {String} [defaultType] The store type to create when used with store configuration and there
     * is no type specified on the config.
     * @return {Ext.data.Store}
     */
    lookup: function(store, defaultType) {
        // handle the case when we are given an array or an array of arrays.
        if (Ext.isArray(store)) {
            var first = store[0],
                data = store,
                arrays, fields, i, len;

            if (Ext.isObject(first)) {
                // store: [ { foo: 42, ... }, { foo: 427, ... }, ... ]
                store = { data: data };
            }
            else {
                arrays = Ext.isArray(first);
                fields = ['field1'];

                if (arrays) {
                    // store: [ [1,2], [3,4], ... ]
                    for (i = 2, len = first.length; i <= len; ++i) {
                        fields.push('field' + i);
                    }
                }
                else {
                    // store: [ 1,2,3, ... ]
                    data = [];
                    for (i = 0, len = store.length; i < len; ++i) {
                        data.push([store[i]]);
                    }
                }

                return new Ext.data.ArrayStore({
                    data: data,
                    fields: fields,
                    autoDestroy: true,
                    autoCreated: true,
                    expanded: !arrays
                });
            }
        }
        
        if (Ext.isString(store)) {
            // store id
            return this.get(store);
        }
        else {
            // store instance or store config
            return Ext.Factory.store(store, defaultType);
        }
    },

    // getKey implementation for MixedCollection
    getKey: function(o) {
         return o.storeId;
    },
    
    addEmptyStore: function() {
        // A dummy empty store with a fieldless Model defined in it.
        // Just for binding to Views which are instantiated with no Store defined.
        // They will be able to run and render fine, and be bound to a generated Store later.
        var emptyStore = this.$emptyStore,
            destoryable = {
                destroy: Ext.emptyFn
            };
        
        if (!emptyStore) {
            emptyStore = this.$emptyStore = 
                Ext.regStore('ext-empty-store', { proxy: 'memory', useModelWarning: false });
            
            emptyStore.isEmptyStore = true;

            emptyStore.on = emptyStore.addListener = function () {
                return destoryable;
            };
            emptyStore.un = emptyStore.removeListener = Ext.emptyFn;
    
            //<debug>
            emptyStore.add = emptyStore.remove = emptyStore.insert = emptyStore.destroy =
                emptyStore.loadData = function() {
                    Ext.raise('Cannot modify ext-empty-store');
                };
            //</debug>
        }
        
        this.add(emptyStore);
    },
    
    clear: function() {
        this.callParent();
        this.addEmptyStore();
    }
}, function() {
    /**
     * Creates a new store for the given id and config, then registers it with the {@link Ext.data.StoreManager Store Manager}. 
     * Sample usage:
     *
     *     Ext.regStore('AllUsers', {
     *         model: 'User'
     *     });
     *
     *     // the store can now easily be used throughout the application
     *     new Ext.List({
     *         store: 'AllUsers',
     *         ... other config
     *     });
     *
     * @param {String/Object} id The id to set on the new store, or the `config` object
     * that contains the `storeId` property.
     * @param {Object} config The store config if the first parameter (`id`) is just the
     * id.
     * @member Ext
     * @method regStore
     */
    Ext.regStore = function (id, config) {
        var store;

        if (Ext.isObject(id)) {
            config = id;
        } else {
            if (Ext.data.StoreManager.containsKey(id)) {
                return Ext.data.StoreManager.lookup(id);
            }
            config.storeId = id;
        }

        if (config instanceof Ext.data.Store) {
            store = config;
        } else {
            store = new Ext.data.Store(config);
        }

        Ext.data.StoreManager.register(store);
        return store;
    };

    /**
     * Shortcut to {@link Ext.data.StoreManager#lookup}.
     * @member Ext
     * @method getStore
     * @inheritdoc Ext.data.StoreManager#lookup
     */
    Ext.getStore = function(name) {
        return Ext.data.StoreManager.lookup(name);
    };
    
    Ext.data.StoreManager.addEmptyStore();
});
