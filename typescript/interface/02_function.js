(function () {
    //函数类型：将接口作为函数的类型
    //定义一个函数，该类型就是上面定义的接口
    function searchString(source, subString) {
        return source.search(subString) > -1;
    }
    console.log(searchString('张三李四', '张'));
})();
