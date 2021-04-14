//接口是对象的状态（属性）和行为（方法）的抽象（描述）
//接口：是一种类型，是一种规范，是一种规则，是一个能力，是一种约束
(() => {
    //定义一个接口，该接口作为person对象的类型使用，限定或者约束该对象中的属性数据
    interface IPerson {
        //readonly id 是只读的
        readonly id: number
        name: string
        age: number
        // ? 可有可无的
        sex?: string
    }

    //定义一个对象，该对象的类型就是上面定义的接口IPerson
    const person:IPerson = {
        id: 1,
        name: 'zhangsan',
        age: 23,
        //sex 这个属性没有也是可以的
        sex: '女'
    }

    console.log(person);
})();