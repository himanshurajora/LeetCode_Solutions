// merge two sorted arrays
// do not use extra space
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    //first we point to actual physical index of both nums1 and nums2
    m--
    n--
    // point k to the last index of nums 1
    let k = m + n + 1
    // repeat while m and n > 0
    while(m>=0 && n>=0){
        // if num1[m] > nums2[n] then copy value of nums1[m--] at nums1[k--] otherwise nums2[n--]
        // try to draw it on copy using a pen to get a better understating
        // I also used a pen and copy to understand this algorithm 
        nums1[k--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
    }
    
    // at last only the second array may have extra element if there are smaller element than 
    // nums1 other wise this step will also get skipped
    while(n>=0){
        nums1[k--] = nums2[n--]
    }
};