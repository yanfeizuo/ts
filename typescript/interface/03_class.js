(function () {
    //类实现接口 可以多实现
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.fly = function () {
            console.log('I fly');
        };
        Person.prototype.swim = function () {
            console.log('I swim');
        };
        return Person;
    }());
    var person = new Person();
    console.log(person.fly());
    console.log(person.swim());
})();
