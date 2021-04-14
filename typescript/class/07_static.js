//静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性和静态方法，也称之为静态成员
//静态成员在使用的时候是通过类名.的这种语法来调用的
(function () {
    //普通
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.sayHi = function () {
            console.log('hi');
        };
        return Person;
    }());
    var p = new Person('zhangsan');
    console.log(p.name);
    p.sayHi();
    //拥有静态成员
    var Person1 = /** @class */ (function () {
        function Person1() {
        }
        Person1.sayHi = function () {
            console.log('hi');
        };
        return Person1;
    }());
    console.log(Person1.name1);
    Person1.sayHi();
})();
