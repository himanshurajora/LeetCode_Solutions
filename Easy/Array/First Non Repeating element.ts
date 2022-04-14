var arr = [-1, 2, -1, 3, 2]
var result = 0
var map = new Map()


arr.forEach((item)=>{
    if(map.has(item)){
        map.set(item, map.get(item)+1)
    }else{
        map.set(item, 1)
    }
})

// search in map where value is 1 using simple for loop
for(let i = 0; i < arr.length; i++){

    console.log(map.get(arr[i]))
    if(map.get(arr[i]) === 1){
        result = arr[i]
        break
    }
}
console.log(result);

