//静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性和静态方法，也称之为静态成员
//静态成员在使用的时候是通过类名.的这种语法来调用的
(() => {
    //普通
    class Person {
        name: string
        constructor(name: string) {
            this.name = name;
        }
        sayHi() {
            console.log('hi')
        }
    }
    const p = new Person('zhangsan');
    console.log(p.name);
    p.sayHi();

    //拥有静态成员
    class Person1 {
        //不能使用name 静态name是内置的成员
        static name1: string
        //constructor不能用static修饰
        constructor() {}
        static sayHi() {
            console.log('hi')
        }
    }

    console.log(Person1.name1);
    Person1.sayHi();
})();