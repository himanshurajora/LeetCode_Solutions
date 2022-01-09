// Adding 1 to a large number that is reprented in array

function plusOne(digits: number[]): number[] {
    // we want to add one
    let carry = 1
    for(let i = digits.length -1; i>=0; i--){
        let sum = digits[i]
        // check if carry is not 0
        if(carry) {
            sum += carry;
        }
        
        // if sum is greater than 9 that means carry will still remain 1
        // and because largest number we can get is 9 and carry is 1 so 9 + 1 = 10; carry will still be 1
        // so the loop will continue
        if(sum > 9) {
            digits[i] = 0;
        }

        // if the sum <= 9, so their will be no more carry hence we make carry to 0
        // set the digits of i to the sum and break the loop to make it efficient
        else{
            carry = 0
            digits[i] = sum
            break
        }
    }

    // if their is still a carry remaining after the whole loop,
    // that means we need some extra space to store that extra carry
    // so we add that to the front 
    if(carry){
        digits.unshift(carry)
    }
    return digits
};
