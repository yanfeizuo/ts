//多态：父类引用指向子类对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name;
        }
        run() {}
    }

    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
        run() {
            console.log(`${this.name}run`)
        }
    }

    class Dog extends Animal {
        constructor(name: string) {
            super(name);
        }
        run() {
            console.log(`${this.name}run`)
        }
    }

    const dog:Animal = new Dog('dog');
    dog.run();
    const cat:Animal = new Cat('cat');
    cat.run();
})();