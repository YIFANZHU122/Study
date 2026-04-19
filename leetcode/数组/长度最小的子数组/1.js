const map = new Map()
let f =[1,1,1]
for(let i =0;i<f.length;i++) {
    map.set(f[i],(map.get(f[i] )|| 0 ) + 1)
    console.log(map.values());  
}
