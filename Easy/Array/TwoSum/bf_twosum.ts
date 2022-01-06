
// alright the name is two sum, and this should not be and issue
var arr = [2,7,11,15]
var target = 9
function twosum (arr : number[], target : number){
    let index = 0

    // It should not be hard two understand these two loops so I just skipping their explaination
    for(index = 0; index < arr.length; index++){
        for(let next = index + 1; next < arr.length; next++){
            if(arr[next] + arr[index] === target){
                return [index, next]
            }
        }
    }
}

// for this complexity will be O(n^2)

var result = twosum(arr, target)
console.log(result)
