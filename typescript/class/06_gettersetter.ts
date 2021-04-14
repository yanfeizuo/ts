//存取器：让我们可以有效的控制对 对象中的成员的访问，通过getter和setter来进行操作
(() => {
    class Person {
        firstName: string
        lastName: string
        constructor(firstName:string, lastName:string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName() {
            return this.firstName + '_' + this.lastName;
        }
        set fullName(val) {
            const arr = val.split('_');
            this.firstName = arr[0];
            this.lastName = arr[1];
        }
    }

    const p = new Person('东方', '不败');
    console.log(p.fullName);
    p.fullName = '诸葛_孔明';
    console.log(p.fullName);
})();