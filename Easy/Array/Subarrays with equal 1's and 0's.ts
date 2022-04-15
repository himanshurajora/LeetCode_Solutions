// the given array is 
var arr = [1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
// find the number of sub arrays containing equal number of 0s and 1s
// and return the number of sub arrays
// the output for above array should be 8


function findSubArray(arr){
    

    var count = 0;
    var map = new Map<number, number>();
    map.set(0, 1)
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            sum -= 1
        }else{
            sum += 1
        }

        if(map.has(sum)){
            count += map.get(sum)
            map.set(sum, map.get(sum) + 1)
        }else{
            map.set(sum, 1)
        }
    }

    map
    return count
}

var result = findSubArray(arr)
result

