var arr = [2,3,1,2,3, 4, 5, 5]

var set = new Set();
var duplicates = []
arr.forEach(item => {
    if(set.has(item)){
        duplicates.push(item)
    }else{
        set.add(item)
    }
})

console.log(duplicates);
