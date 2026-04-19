// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
 
// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([])"
// 输出：true

 




// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//    let stack = []
//    const obj = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//    }
//    for(let i = 0; i < s.length; i++) {
//      if(obj[s[i]]) {
//         stack.push(s[i])
//      }else{
//         if(obj[stack.pop()] !== s[i]) { //所有结论都要成立，而现在只有一个成立，就反着判断
//             return false
//         }
//      }
//    }
//    return stack.length === 0
// };


//从左往右遍历字符串,凡是朝左的括号都入栈，凡是朝右的括号都出栈一个元素
//每一个出栈的元素与 obj 对象中查找
//再和右边比较
//直到栈内元素为空，返回ture

var isValid = function(s) {
   if(s.length % 2 !== 0) return false
   let stack = []
   const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
   }
   for(const j of s) {
     if(obj[j]) {
        stack.push(obj[j])
     }else{
        if(stack.pop() !== j) { //所有结论都要成立，而现在只有一个成立，就反着判断
            return false
        }
     }
   }
   return stack.length === 0
};