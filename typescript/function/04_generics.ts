//泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
    function getArr<T>(value: T, count: number): T[] {
        const arr: Array<T> = [];
        for (let i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }

    const arr = getArr<number>(200.56, 5);
    console.log(arr);

    //多个泛型参数
    function getMsg<K, V, D>(value1: K, value2: V, value3: D): [K, V, D] {
        return [value1, value2, value3];
    }

    const arr1 = getMsg<string, number, boolean>('jack', 100.3, true);
    console.log(arr1);
})();