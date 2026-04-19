// 要能判断自己是否已经被实例化过
class SingleDog {
    show() {
        console.log('我是1');
    }
    static getInstance() {
        if(!SingleDog.instance) {
            SingleDog.instance = new SingleDog()
        }    
        return SingleDog.instance
    }
}

const dog1 = SingleDog.getInstance()
const dog2 = SingleDog.getInstance()

console.log(dog1 === dog2);
