
var arr = [2, 1, 6, 10, 4, 1, 3, 9, 7];

function Partition(arr, l, r) : number{
    var pivot = arr[r];
    var i = l - 1;
    for(var j = l; j < r; j++){
        if(arr[j] <= pivot){
            i++;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    var temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;
    return i + 1;
}

function QuickSort(arr, l ,r){
    
    if(l < r){
        var pivot = Partition(arr, l, r);
        QuickSort(arr, l, pivot - 1);
        QuickSort(arr, pivot + 1, r);
    }
}


arr
QuickSort(arr, 0, arr.length - 1)
arr 

