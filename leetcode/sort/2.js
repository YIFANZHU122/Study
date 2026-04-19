const arr = [3,5,7,2,1]

//最小值

function selectSort(arr) {
    let minIndex = 0;
    for(let i =0;i<arr.length;i++){
        minIndex = i;  //最小值的位置指针
        for(let j =i;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}
console.log(selectSort(arr))
