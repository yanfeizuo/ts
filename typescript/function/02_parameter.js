//可选参数：函数在声明的时候，内部的参数使用了?进行修饰，那个就表示该参数可传可不传
//默认参数：函数在声明的时候，内部的参数有自己的默认值，此时的这个参数叫做默认参数
//剩余参数：放在函数声明的时候所有的参数的最后
(function () {
    var getFullName = function (firstName, lastName) {
        if (firstName === void 0) { firstName = '东方'; }
        //判断lastName是否传了
        if (lastName) {
            return firstName + '_' + lastName;
        }
        else {
            return firstName;
        }
    };
    //调用
    console.log(getFullName());
    console.log(getFullName('诸葛'));
    console.log(getFullName('诸葛', '孔明'));
    //剩余参数
    // ...args:string[]  剩余的参数，放在了一个字符串的数组中，args里面
    function showMsg(str, str2) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        console.log(str, str2);
        console.log(args);
    }
    showMsg('a', 'b', 'c', 'd', 'e', 'f');
})();
