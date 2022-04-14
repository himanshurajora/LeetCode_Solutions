var arr1 = [1, 5, 10, 20, 40, 80]
var arr2 = [6, 7, 20, 80, 100]
var arr3 = [3, 4, 15, 20, 30, 70, 80, 120]


function findCommon(arr1 : number[], arr2 : number[], arr3: number[]){

    var i =0, j=0, k=0;
    var result = []

    while(i<arr1.length && j<arr2.length && k<arr3.length){
        if(arr1[i] == arr2[j] && arr2[j] == arr3[k]){
            result.push(arr1[i])
            i++
            j++
            k++
        }else if(arr1[i] < arr2[j]){
            i++
        }else if(arr2[j] < arr3[k]){
            j++
        }else{
            k++
        }
    }
    return result
}

var result = findCommon(arr1, arr2, arr3)
console.log(result)
