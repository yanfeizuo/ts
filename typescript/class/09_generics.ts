//定义一个类，类中的属性值是不确定的，方法中的参数及返回值类型也是不确定的
(() => {
    class GenericNumber<T> {
        defaultValue: T
        add: (x: T, y: T) => T
    }

    //在实例化类的对象的时候，再确定泛型的类型
    const g: GenericNumber<number> = new GenericNumber<number>()
    //设置属性值
    g.defaultValue = 100;
    g.add = function(x, y) {
        return x + y;
    }
    console.log(g.add(g.defaultValue, 20));
})();