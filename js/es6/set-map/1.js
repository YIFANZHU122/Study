// const s = new Set([1,2,3,4,4,4])

// console.log(s);


// const arr = [1,1,2,2,3,3]
// const s = [...new Set(arr)]
// console.log(s);


const s = new Set()
s.add(1)
s.add(2)
s.add(3)
s.add(3)
console.log(s);
// s.delete(3)
// console.log(s);
// s.has(3)
// console.log(s.has(3));
// s.clear()
// console.log(s);
// console.log(s[0]);

for(const item of s.values()) {
    console.log(item);
}

for(const item of s.keys()) {
    console.log(item);
}
