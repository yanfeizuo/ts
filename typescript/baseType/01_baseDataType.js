(function () {
    console.log("------布尔类型------");
    //布尔类型--boolean
    var flag = true;
    console.log(flag);
    console.log("------数字类型------");
    //数字类型--number
    var a1 = 10; //十进制
    var a2 = 10; //二进制
    var a3 = 10; //八进制
    var a4 = 0xa; //十六进制
    console.log(a1, a2, a3, a4);
    console.log("------字符串类型------");
    //字符串类型--string
    var str = '我想大静静';
    console.log(str);
    console.log("------undefined 和 null------");
    //undefined 和 null 
    //所有类型的子类型
    var undfd = undefined;
    var nll = null;
    console.log(undefined, nll);
    console.log("------数组类型------");
    //数组类型
    //定义方式一
    var arr1 = [1, 2, 3, 4, 5];
    console.log(arr1);
    //方式二 泛型写法
    var arr2 = ['张三', '李四'];
    console.log(arr2);
    //方式三 元组类型：在定义数组的时候类型的个数已经确定了
    var arr3 = [12, "zhangsan", true];
    console.log(arr3);
    console.log("------枚举类型------");
    //枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，默认编号是从0开始的
    //依次的递增加1
    var Color;
    (function (Color) {
        Color[Color["red"] = 1] = "red";
        Color[Color["green"] = 2] = "green";
        Color[Color["blue"] = 3] = "blue";
    })(Color || (Color = {}));
    var Color1;
    (function (Color1) {
        Color1["red"] = "red";
        Color1["green"] = "green";
        Color1["blue"] = "blue";
    })(Color1 || (Color1 = {}));
    //定义一个Color的枚举类型的变量来接收枚举的值
    var color = Color.red;
    console.log(color);
    console.log(Color.red, Color.green, Color.blue);
    console.log(Color[3]);
    console.log(Color1.red, Color1.green, Color1.blue);
    console.log("------any类型------");
    //any 类型
    var anyStr = 100;
    str = "春江潮水连海平，海上明月共潮生";
    console.log(anyStr);
    var anyArr = [100, '努力干活', true];
    console.log(anyArr);
    console.log("------void类型------");
    //void类型，在函数声明的时候，小括号的后面使用:void，代表的是该函数没有任何的返回值
    function showMsg() {
        console.log("滟滟随波千万里，何处春江无月明");
    }
    showMsg();
    console.log("------object类型------");
    //object 类型
    function getObj(obj) {
        console.log(obj);
        return {
            name: 'zhangsan',
            age: 23
        };
    }
    console.log(getObj({ name: 'lisi', age: 24 }));
    console.log("------联合类型------");
    //联合类型 （Union Types）表示取值可以是多种类型中的一种
    function getString(str) {
        return str + "";
    }
    console.log(getString(123456));
    console.log("------断言类型类型------");
    //类型断言：告诉编译器，我知道自己是什么类型，也知道自己在干什么
    //类型断言的语法方式1：<类型>变量名
    //类型断言的语法方式2：值 as 类型
    function getString2(str) {
        if (str.length) {
            // return (<string>str).length;
            return str.length;
        }
        else {
            return str.toString().length;
        }
    }
    console.log(getString2("1234567"));
})();
