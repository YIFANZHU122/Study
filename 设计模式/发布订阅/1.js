class EventEmitter {
    constructor() {
        this.eventList = {}
    }
    on(eventName,cb) {
        if(!this.eventList[eventName]) {
            this.eventList[eventName] = []
        }
        this.eventList[eventName].push(cb)
    }
    emit(eventName) {
        if(this.eventList[eventName]) {
            const handlers = this.eventList[eventName].slice() // 浅拷贝
            handlers.forEach(cb => {
                cb()
            })
        }
    }
    off(eventName,cb) {
        const callbacks = this.eventList[eventName]
        const index = callbacks.indexOf(cb)
        if(index !== -1) {
            callbacks.splice(index,1)
        }
    } 
    once(eventName,cb) {
        const wrap = () => {
            cb()
            this.off(eventName,wrap)
        }
        this.on(eventName,wrap)

    }
}

let e = new EventEmitter()


function a() {
    console.log("1");
}
function b() {
    console.log("2");
}
function c() {
    console.log("a");
}


e.on('has', a)
e.on('has', b)
e.on('you', c)
e.off('has', a)

e.emit('has')  // 发布 => a函数的调用
