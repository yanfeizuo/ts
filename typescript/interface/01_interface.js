//接口是对象的状态（属性）和行为（方法）的抽象（描述）
//接口：是一种类型，是一种规范，是一种规则，是一个能力，是一种约束
(function () {
    //定义一个对象，该对象的类型就是上面定义的接口IPerson
    var person = {
        id: 1,
        name: 'zhangsan',
        age: 23,
        //sex 这个属性没有也是可以的
        sex: '女'
    };
    console.log(person);
})();
