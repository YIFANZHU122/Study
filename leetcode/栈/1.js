let stack = []; // 主观上说它是一个栈,它就是一个栈

// stack.push(1);
// stack.shift();


// stack.push(1);
// stack.push(2);
// stack.push(3);

// for (let i = stack.length - 1; i >= 0; i--) {  //就不是栈  //栈不能再3还在时，访问到2
//     console.log(`我是${stack[i]}`);
// }

// for (let i = stack.length - 1; i >= 0; i--) {  
//     console.log(`我是${stack.pop()}`);  //pop 会将首部元素移除, 将移除的元素返回出来
// }

while (stack.length) {
    console.log(`我是${stack.pop()}`);
}