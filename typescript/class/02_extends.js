var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    //类与类之间通过extends关键字单继承
    //子类可以调用父类中的构造函数和实例方法，使用super关键字
    //子类可以重写父类的方法
    //定义一个基类（父类/超类）
    var Person = /** @class */ (function () {
        //构造方法
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        //方法
        Person.prototype.sayHi = function (str) {
            console.log("\u6211\u662F" + this.name + "\uFF0C", str);
        };
        return Person;
    }());
    //子类基层Person
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, gender) {
            return _super.call(this, name, age, gender) || this;
        }
        //重写sayHi
        Student.prototype.sayHi = function () {
            _super.prototype.sayHi.call(this, 'heihei');
        };
        return Student;
    }(Person));
    var s = new Student('zhangsan', 23, 'fm');
    s.sayHi();
})();
