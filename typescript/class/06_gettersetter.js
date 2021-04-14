//存取器：让我们可以有效的控制对 对象中的成员的访问，通过getter和setter来进行操作
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(Person.prototype, "fullName", {
            get: function () {
                return this.firstName + '_' + this.lastName;
            },
            set: function (val) {
                var arr = val.split('_');
                this.firstName = arr[0];
                this.lastName = arr[1];
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p = new Person('东方', '不败');
    console.log(p.fullName);
    p.fullName = '诸葛_孔明';
    console.log(p.fullName);
})();
