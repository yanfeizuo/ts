(() => {
    //函数类型：将接口作为函数的类型

    //定义一个接口，用来作为某个函数的类型使用
    interface ISearchFunc {
        //定义一个调用签名
        //只有参数列表和返回值类型
        (source: string, subString: string): boolean
    }

    //定义一个函数，该类型就是上面定义的接口
    const searchString:ISearchFunc = function (source: string, subString: string): boolean {
        return source.search(subString) > -1;
    }

    console.log(searchString('张三李四', '张'));
})();