function maxSubArray(nums: number[]): number {
    var max = nums[0]
    var sum = 0

    nums.forEach((value) => {
        sum += value 
        if(sum > max){
            max = sum 
        } 
        if(sum < 0){
            sum = 0
        }
    })

    return max
};
