
var arr = [1, 4, 5,1, 6, 3]
var givenSum = 9;
var map = new Set();

arr.forEach((el, i) => {
    if(!map.has(el)){
        map.add(el)
    }

    if(map.has(givenSum - el)){
        console.log(`${el} + ${givenSum - el} = ${givenSum}`)
    }
})
