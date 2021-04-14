//泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口的时候，再指定具体泛型类型
(function () {
    //定义一个用户信息的类
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        return User;
    }());
    //定义一个类，可以针对用户的信息对象进行增删改查操作
    var UserCRUD = /** @class */ (function () {
        function UserCRUD() {
            this.data = [];
        }
        UserCRUD.prototype.add = function (user) {
            user.id = Date.now() + Math.random();
            this.data.push(user);
            return user;
        };
        UserCRUD.prototype.getUserById = function (id) {
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var user_1 = _a[_i];
                if (user_1.id === id) {
                    return user_1;
                }
            }
        };
        return UserCRUD;
    }());
    //实例化添加用户信息对象的类UserCRUD
    var userCRCD = new UserCRUD();
    //调用添加数据的方法
    userCRCD.add(new User('张三', 23));
    userCRCD.add(new User('李四', 24));
    var id = userCRCD.add(new User('王五', 25)).id;
    console.log(userCRCD.data);
    //根据id 查询用户信息
    console.log(id);
    var user = userCRCD.getUserById(id);
    console.log(user);
})();
