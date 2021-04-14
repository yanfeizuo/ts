//泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
(function () {
    function getArr(value, count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    var arr = getArr(200.56, 5);
    console.log(arr);
    //多个泛型参数
    function getMsg(value1, value2) {
        return [value1, value2];
    }
    var arr1 = getMsg('jack', 100.3);
    console.log(arr1);
})();
