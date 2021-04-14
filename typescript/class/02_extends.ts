(() => {
    //类与类之间通过extends关键字单继承
    //子类可以调用父类中的构造函数和实例方法，使用super关键字
    //子类可以重写父类的方法

    //定义一个基类（父类/超类）
    class Person {
        //属性
        name: string
        age: number
        gender: string

        //构造方法
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        //方法
        sayHi(str: string) {
            console.log(`我是${this.name}，`, str);
        }
    }

    //子类基层Person
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            super(name, age, gender);
        }

        //重写sayHi
        sayHi() {
            super.sayHi('heihei');
        }
    }

    const s = new Student('zhangsan', 23, 'fm');
    s.sayHi();
})();