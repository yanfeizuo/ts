//泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口的时候，再指定具体泛型类型
(() => {
    //定义一个泛型接口
    interface IBaseCRUD<T> {
        data: Array<T>
        add: (t: T) => T
        getUserById: (id: number) => T
    }

    //定义一个用户信息的类
    class User {
        id?: number // ? 代表可有可无
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    //定义一个类，可以针对用户的信息对象进行增删改查操作
    class UserCRUD implements IBaseCRUD<User> {
        data: Array<User> = []
        add(user: User):User {
            user.id = Date.now() + Math.random()
            this.data.push(user);
            return user;
        }
        getUserById(id: number): User {
            for (let user of this.data) {
                if (user.id === id) {
                    return user
                }
            }
        }
    }

    //实例化添加用户信息对象的类UserCRUD
    const userCRCD:UserCRUD = new UserCRUD();
    //调用添加数据的方法
    userCRCD.add(new User('张三', 23));
    userCRCD.add(new User('李四', 24));
    const { id } = userCRCD.add(new User('王五', 25));

    console.log(userCRCD.data);

    //根据id 查询用户信息
    console.log(id);
    const user = userCRCD.getUserById(id);
    console.log(user);
})();