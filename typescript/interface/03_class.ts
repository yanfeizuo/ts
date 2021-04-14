(() => {
    //定义一个接口
    interface IFly {
        fly()
    }
    //定义一个接口
    interface ISwim {
        swim()
    }

    //接口可以多继承
    interface IPerson extends IFly, ISwim {}

    //类实现接口 可以多实现
    class Person implements IFly, ISwim {
        fly() {
            console.log('I fly')
        }
        swim() {
            console.log('I swim')
        }
    }

    class Person2 implements IPerson {
        fly() {
            console.log('I fly')
        }
        swim() {
            console.log('I swim')
        }
    }

    let person = new Person();
    let person2 = new Person2();

    console.log(person.fly());
    console.log(person.swim());
})();