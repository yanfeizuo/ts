//函数重载：函数名字相同，函数的参数和个数不同
(function () {
    //定义一个函数
    //需求：我们有一个add函数，它可以接受2个string类型的参数进行拼接，也可以接受2个number类型的进行相加
    //函数声明
    function add(x, y) {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y; //字符串拼接
        }
        else if (typeof x === 'number' && typeof y === 'number') {
            return x + y; //数字相加
        }
    }
    //函数调用
    //两个参数都是字符串
    console.log(add('诸葛', '孔明'));
    //两个参数都是数字
    console.log(add(10, 20));
    console.log(add('张三', 23));
})();
