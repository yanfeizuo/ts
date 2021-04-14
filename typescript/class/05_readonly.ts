// readonly修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员，就不能在外部被随意修改了
// 构造函数中，可以对只读的属性成员进行修改
// 如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly进行修饰了，那么外部也是不能对这个属性进行更改的
// 构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，不能修改
// 构造函数中的参数可以使用public及private和protected进行修饰，无论是哪个进行修饰，该类中都会自动的添加这个一个属性成员

(() => {
    class Person1 {
        readonly name: string = '张三'
        constructor(name: string) {
            this.name = name;
        }
    }

    const p1 = new Person1('zhangsan');
    // p1.name = 'lisi' //无法修改

    class Person2 {
        constructor(readonly name: string) {
            this.name = name;
        }
    }

    const p2 = new Person2('zhangsan');
    console.log(p2.name);

    class Person3 {
        constructor(public name: string) {
            this.name = name;
        }
    }

    const p3 = new Person3('wangwu');
    console.log(p3.name);
})();