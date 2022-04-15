

var num  = 5;


function fact(x: number){
    var result = 1
    while(x > 0){
        result *= x
        x--
    }

    return result
}

console.log(fact(num))
