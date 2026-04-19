console.log("start");

async function async1() {
  await async2(); // 等待async2完成
  console.log("async1 end"); // 这行属于微任务
}

async function async2() {
  console.log("async2"); // 同步执行
}

async1();

setTimeout(() => {
  console.log("setTimeout"); // 宏任务
}, 0);

new Promise((resolve) => {
  console.log("Promise"); // 同步执行
  resolve();
}).then(() => {
  console.log("Promise then"); // 微任务
});

console.log("end");