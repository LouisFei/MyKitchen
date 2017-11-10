ExtJS数据包中重要的三类：
    Model（数据实体模型）、
    Store（数据集）、
    Proxy（数据代理）

Model（数据实体模型）
    数据实体模型代表了应用系统中用到的数据实体。
    Model数据实体模型类的4个重要组成部分：
        Fields：字段定义
        Proxy：数据代理
        Associations：模型关联
        Validations：数据校验


数据代理：Proxy
    数据代理用来处理数据的读取和保存，如通过Ajax代理获取服务器端的数据。

数据读写器：Reader、Writer
    数据读写器用于读取原始数据到Model数据实体模型，或者将Model数据实体模型格式化为指定的数据格式。

数据集：Store
    数据集是一个保存Model对象的客户端缓存，提供对数据的过滤、排序、查找等功能，常用于数据模型与UI组件的数据接口。