// move all negative elements to one side of the array


var arr = [1, -1, 3, 2, -7, -5, 11, 6]
function moveNegativeToOneSide(arr : number[]){
    var pos = []
    var neg = []

    arr.forEach(num=> {
        if(num >= 0){
            pos.push(num)
        }else{
            neg.push(num)
        }
    })

    return [...pos, ...neg]
}


const result = moveNegativeToOneSide(arr)
console.log(result);
