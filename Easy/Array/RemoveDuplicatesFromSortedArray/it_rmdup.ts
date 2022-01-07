// just a simple iterative function will work in this case

// the given array is sorted
function removeDuplicates(nums: number[]): number {
    // i is the current element
    let i = 0;
    // j is the next element two check with starts with 1 two skip useless check at 0 index
    for(let j = 1; j<nums.length; j++){
        // if value of next element is not equal to current that means we have a unique element so apply the swap
        if(nums[j] !== nums[i]){
            nums[++i] = nums[j]
        }
    }
    return i + 1
};