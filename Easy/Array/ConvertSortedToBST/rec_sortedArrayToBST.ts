class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


// function getnNode for recurrsively getting the nodes
function getNode(nums : number[], start : number, end : number) : TreeNode | null{
    // base case : start > end, that means we have check all the element for side
    if(start > end) return null
    // create the root node for storing its child nodes
    let root = new TreeNode()
    // get the mid
    let mid = Math.floor((start+end)/2)
    // add the value of root
    root.val = nums[mid]
    // get the left node of root node
    root.left = getNode(nums, start, mid-1)
    // get the right node of the root node
    root.right = getNode(nums, mid + 1, end)

    return root
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    var left = 0
    var right = nums.length - 1
    // get the root node : Recurrsive function 
    var root = getNode(nums, left, right)
    return root
};
