//修饰符（类中的成员的修饰符）：主要描述类中的成员（属性，构造方法，方法）的可访问性
//类中的成员都有自己的默认的访问修饰符，public
//public 修饰符，类中成员默认修饰符，代表的是公共的，任何位置都可以访问类中的成员
//private修饰符，类中的成员如果使用private来修饰，那么外部是无法访问这个成员数据的，子类也不行
//protected修饰符，使用此修饰符，外部无法访问，子类可以
(() => {
    class Person {
        // public name: string
        private name: string
        constructor(name: string) {
            this.name = name;
        }
        eat() {
            console.log('eat');
        }
    }

    class Student extends Person {
        constructor(name: string) {
            super(name);
        }
    }

    const s = new Person('zhangsan');
    //无法访问s.name
    // console.log(s.name);
})();