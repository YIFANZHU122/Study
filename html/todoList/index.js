// 当用户点击提交按钮时, 执行以下操作
// 1. 获取用户输入的内容
// 2. 创建一个新的 <li> 元素, 并将内容添加到 <li> 元素中
// 3. 将 <li> 元素添加到待办事项列表中

//监听提交按钮的事件
const form = document.querySelector('.form');
const input = document.querySelector('.form_input')
const ul = document.querySelector('.todo_list')

const toDoListArray = []; // 存储代办事项的数组

form.addEventListener('submit', function(e) { 
    e.preventDefault();  //阻止表单默认提交行为
    
    let itemId = String(Date.now()); // 生成一个唯一的 ID
    let toDoItem = input.value; // 获取用户输入的内容

    addItemToArray(itemId, toDoItem);
    // renderToDoList(toDoListArray);
    addItemToUl(itemId, toDoItem);
    input.value = '';
    
}) 

function addItemToArray (id, item) {
        toDoListArray.push({
            itemId:id,
            todoItem:item,
        })
}

// function renderToDoList(arr) {
//     for(let i =0; i<arr.length; i++) {
//         // let item = arr[i];
//         // 1.生成一个 li 元素
//         const li = document.createElement('li')
//         // 2.给 li元素添加内容
//         li.textContent = arr[i].todoItem
//         // 3.将 li 元素添加到 ul 列表中
//         ul.appendChild(li);

//     }
// }

function addItemToUl(id, item) {
    // 1.生成一个 li 元素
    const li = document.createElement('li')
    // 2.给 li元素添加内容
    li.textContent = item

    li.setAttribute('data-id', id)
    // 3.将 li 元素添加到 ul 列表中
    ul.appendChild(li);
}


//移除代办事项

// ul.addEventListener('click', function(e) {
//     e.target.remove()
// })

// 监听 ul 元素的点击事件
ul.addEventListener('click', function(e) {
    // // 检查点击的元素是否是 <li> 元素
        // 从数组中移除对应的项s
    // console.log(e.target.getAttribute('data-id'));
        // 从 DOM 中移除对应的 <li> 元素
        // e.target.remove();
     const itemId = e.target.getAttribute("data-id");
    removeItemFromArray(itemId);
    removeItemFromUI(itemId);
})

function removeItemFromArray(id) {
    for(let i = 0;i < toDoListArray.length;i++) {
        if(toDoListArray[i].itemId === id) {
            toDoListArray.splice(i,1)
        }
    }
}

function removeItemFromUI(id) {
    const item = document.querySelector(`[data-id="${id}"]`)
    item.remove()
}
