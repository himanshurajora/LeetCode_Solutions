var arr = [1,2,3,-2,5]

// find largest sum contiguous subarray

function largestSum(arr){
    let max = arr[0]
    let maxSum = arr[0]
    for(let i = 1; i < arr.length; i++){
        max = Math.max(arr[i], max + arr[i])
        maxSum = Math.max(max, maxSum)
    }
    return maxSum
}

console.log(largestSum(arr));




