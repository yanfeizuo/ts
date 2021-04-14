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
//修饰符（类中的成员的修饰符）：主要描述类中的成员（属性，构造方法，方法）的可访问性
//类中的成员都有自己的默认的访问修饰符，public
//public 修饰符，类中成员默认修饰符，代表的是公共的，任何位置都可以访问类中的成员
//private修饰符，类中的成员如果使用private来修饰，那么外部是无法访问这个成员数据的，子类也不行
//protected修饰符，使用此修饰符，外部无法访问，子类可以
(function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.eat = function () {
            console.log('eat');
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name) {
            return _super.call(this, name) || this;
        }
        return Student;
    }(Person));
    var s = new Student('zhangsan');
    console.log(s.name);
})();
