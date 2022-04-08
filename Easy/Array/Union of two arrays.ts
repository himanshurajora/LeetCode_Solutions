// Union of two arrays

var arr1 = [1, 2, 3, 4, 5]
var arr2 = [3, 5]

function unionOfTwoArrays(arr1: number[], arr2: number[]){
    
    var unionMap = new Map();

    for (var i = 0; i < arr1.length; i++) {
        unionMap.set(arr1[i], true);
    }

    for (var i = 0; i < arr2.length; i++) {
        unionMap.set(arr2[i], true);
    }

    return Array.from(unionMap.keys()).length;
}


const result =  unionOfTwoArrays(arr1, arr2)
result
