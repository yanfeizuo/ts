//抽象类：包含抽象方法，也可以包含实例方法，抽象类不能被实例化，必须让子类进行实例化和实现内部的抽象方法
(() => {
    abstract class Animal {
        //抽象方法
        abstract eat()
        sayHi() {
            console.log('hi')
        }
    }

    class Dog extends Animal {
        eat() {
            console.log('dog eat')
        }
    }

    const dog = new Dog();
    dog.eat();
    dog.sayHi();
})();