function getLevel(prevLevel : number[] ,rowNum : number){
    // Create an array for this level of items length rowNum
    let array = new Array<number>(rowNum)
    // make it's first and last element 1
    array[0] = 1
    array[rowNum - 1] = 1    
    // start I wilth 0, it is the index pointer for prevLevel
    let i = 0
    // j starts with 1 because it is the index pointer for current lever (array) and 0th 
    // index has already been filled with 1
    let j = 1
    // run this loop until i gets the last index of the prevLeve
    while(i<prevLevel.length - 1){
        // insert the value of addtion of prev[i] and prev[i+1] in the array[j] and increament both
        array[j++] = prevLevel[i++] + prevLevel[i]
    }
    // return the current level
    return array
}

function generate(numRows: number): number[][] {
    // create an multidimention array for pascle tree
    let pascleTree = [[]]
    // start row from 1 because we have 0th index as empty array
    for(let row = 1; row<=numRows; row++){
        // generate and push each level to pascleTree
        pascleTree.push(getLevel(pascleTree[row-1], row));
    }
    // remove the 0th index because it in and empty array hence not required
    return pascleTree.splice(1, pascleTree.length)
};

