// Just a simple interative function
function removeElement(nums: number[], val: number): number {
    // index points to the index that we have filled value till
    let index = 0;
    // for loop for all numbers in nums array
    for (var i = 0; i < nums.length; i++) {
        // simple test case
        if(nums[i] !== val){
            // put the value of nums[i] at nums[index++] only if the the current num is not val 
            nums[index++] = nums[i]
        }
    }
    // we can simply get the new array using array.splice(0, index)
    return index
};
