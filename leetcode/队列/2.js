const queue = [];  // push  shift

queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
// for(let i = 0;i < queue.length; i++) {
//     queue[i]
// }

// for(let i = 0;i < queue.length; i++) {
//     const top = queue.shift()
//     console.log(top);   // 1 2
// }  

while(queue.length) {
    const top = queue.shift()
    console.log(top);   // 3 4
}
