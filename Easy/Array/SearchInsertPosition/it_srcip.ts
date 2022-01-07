// it will be a simple iterative binary search program
function searchInsert(nums: number[], target: number): number {
    var right = nums.length - 1;
    var left = 0;

    while(left <= right){
        var mid = Math.floor((right + left)/2);
        if(nums[mid] === target){
            return mid
        }else if(target < nums[mid]){
            right = mid - 1 
        }else{
            left = mid + 1
        }
    }

    // return the index where the target should be inserted if it is not found in the array
    return left
};
