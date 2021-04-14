(() => {
    console.log("------布尔类型------")
    //布尔类型--boolean
    let flag: boolean = true;
    console.log(flag);

    console.log("------数字类型------")
    //数字类型--number
    let a1: number = 10;    //十进制
    let a2: number = 0b1010;//二进制
    let a3: number = 0o12;  //八进制
    let a4: number = 0xa     //十六进制
    console.log(a1, a2, a3, a4);

    console.log("------字符串类型------")
    //字符串类型--string
    let str: string = '我想大静静';
    console.log(str);

    console.log("------undefined 和 null------")
    //undefined 和 null 
    //所有类型的子类型
    let undfd: undefined = undefined;
    let nll: null = null;
    console.log(undefined, nll);

    console.log("------数组类型------")
    //数组类型
    //定义方式一
    let arr1: number[] = [1, 2, 3, 4, 5];
    console.log(arr1);
    //方式二 泛型写法
    let arr2: Array<string> = ['张三', '李四'];
    console.log(arr2);
    //方式三 元组类型：在定义数组的时候类型的个数已经确定了
    let arr3: [number, string, boolean] = [12, "zhangsan", true];
    console.log(arr3);

    console.log("------枚举类型------")
    //枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，默认编号是从0开始的
    //依次的递增加1
    enum Color {
        red = 1,
        green,
        blue
    }

    enum Color1 {
        red = 'red',
        green = 'green',
        blue = 'blue'
    }

    //定义一个Color的枚举类型的变量来接收枚举的值
    let color: Color = Color.red;
    console.log(color);
    console.log(Color.red, Color.green, Color.blue);
    console.log(Color[3]);

    console.log(Color1.red, Color1.green, Color1.blue)

    console.log("------any类型------")
    //any 类型
    let anyStr: any = 100;
    str = "春江潮水连海平，海上明月共潮生"
    console.log(anyStr);

    let anyArr: any[] = [100, '努力干活', true];
    console.log(anyArr);

    console.log("------void类型------")
    //void类型，在函数声明的时候，小括号的后面使用:void，代表的是该函数没有任何的返回值
    function showMsg(): void {
        console.log("滟滟随波千万里，何处春江无月明");
    }
    showMsg();

    console.log("------object类型------")
    //object 类型
    function getObj(obj: object): object {
        console.log(obj);
        return {
            name: 'zhangsan',
            age: 23
        }
    }

    console.log(getObj({ name: 'lisi', age: 24 }));

    console.log("------联合类型------")
    //联合类型 （Union Types）表示取值可以是多种类型中的一种

    function getString(str: number | string): string {
        return str + "";
    }
    console.log(getString(123456));

    console.log("------断言类型类型------")
    //类型断言：告诉编译器，我知道自己是什么类型，也知道自己在干什么
    //类型断言的语法方式1：<类型>变量名
    //类型断言的语法方式2：值 as 类型
    function getString2(str: number | string): number {
        if ((<string>str).length) {
            // return (<string>str).length;
            return (str as string).length;
        } else {
            return str.toString().length;
        }
    }
    console.log(getString2("1234567"));
})();