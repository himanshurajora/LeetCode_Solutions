var arr = [2,7,11,15]
var target = 9

function twosum(nums : number[], target : number){
    var seen = {}
    var result = []
    nums.forEach((value, index)=>{
        let remaining = target - nums[index];
        if(seen[remaining] !== undefined){
            result = [index, seen[remaining]]
        }
        seen[value] = index
    })

    return result
}

var result = twosum(arr, target)
console.log(result)
