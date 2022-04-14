var arr = [1, 5, 3, 4, 3, 5, 6]

var map = new Map<number, number>()
var result 


for(let i in arr){
    if(map.has(arr[i])){
        result = map.get(arr[i])
        break
    }else{
        map.set(arr[i], parseInt(i))
    } 
}

result
