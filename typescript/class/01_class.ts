(() => {
    //通过类可以实例化对象

    class Person {
        //定义属性
        name: string
        age: number
        gender: string
        //定义构造函数
        constructor(name: string, age: number, gender: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        //定义实例方法
        sayHi(str: string) {
            console.log(`大家好，我是${this.name}，今年${this.age}岁了，是个${this.gender}孩子，`, str);
        }
    }

    const person = new Person('张三', 23, '男');
    person.sayHi('你叫什么名字啊？')
})();