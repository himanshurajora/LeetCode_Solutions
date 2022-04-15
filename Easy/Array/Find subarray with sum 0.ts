var arr = [4, 2, 23, 1, -6];

// find if any subarray sum is 0
function subarraySum(arr, sum) {
    let sumMap = new Map();
    sumMap.set(0, -1);
    let currSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (sumMap.has(currSum - sum)) {
            return true;
        }
        if (!sumMap.has(currSum)) {
            sumMap.set(currSum, i);
        }
    }
    return false;
}

var res = subarraySum(arr, 0)
res
