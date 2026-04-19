// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

 

// 示例 1：

// 输入：s = "ab#c", t = "ad#c"
// 输出：true
// 解释：s 和 t 都会变成 "ac"。
// 示例 2：

// 输入：s = "ab##", t = "c#d#"
// 输出：true
// 解释：s 和 t 都会变成 ""。
// 示例 3：

// 输入：s = "a#c", t = "b"
// 输出：false
// 解释：s 会变成 "c"，但 t 仍然是 "b"。
 

// 提示：

// 1 <= s.length, t.length <= 200
// s 和 t 只含有小写字母以及字符 '#'

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    // const check = (n) =>{
    //     const arr = []
    //     for(let i of n) {
    //         arr[i === '#' ? 'pop' : 'push'](i)
    //     }
    //     return arr.join('')
    // }
    return check(s) == check(t)
};

var check = function(num) {
    // const arr = []

    //     for(let i =0;i<len;i++) {
    //     if(num[i] === '#') {
    //         if(arr.length) {
    //             arr.pop()
    //         }
    //     }else{
    //         arr.push(num[i])
    //     }
    // }
    // return arr.join('')
    let a = num.split("")
    let slowIndex = 0,fastIndex = 0
    while(fastIndex < a.length) {
        if(fastIndex !== "#") {
            num[slowIndex] = num[fastIndex]
            slowIndex++
        }else if(slowIndex > 0){
           slowIndex--
        }
        fastIndex++
    }
    a.length = slowIndex
    return a.join('')
}