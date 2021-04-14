(function () {
    //通过类可以实例化对象
    var Person = /** @class */ (function () {
        //定义构造函数
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        //定义实例方法
        Person.prototype.sayHi = function (str) {
            console.log("\u5927\u5BB6\u597D\uFF0C\u6211\u662F" + this.name + "\uFF0C\u4ECA\u5E74" + this.age + "\u5C81\u4E86\uFF0C\u662F\u4E2A" + this.gender + "\u5B69\u5B50\uFF0C", str);
        };
        return Person;
    }());
    var person = new Person('张三', 23, '男');
    person.sayHi('你叫什么名字啊？');
})();
