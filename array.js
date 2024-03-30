//Write a JavaScript function that accepts two numbers to generate an array between them. For example, 
//if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].
function createNumbers(start, end) {
    //get to know the length of the array and how many features will be passed in the array
    let length;
    if (start <= end) {
        length = end - start + 1;
    } else {
        length = start - end + 1;
    }
    //how the numbers in the array increases or decreases
    let increment = start < end ? 1 : -1;
    let arr = [];
    //for loop to loop the array with wanted elements
    for (let i = 0; i < length; i++) {
        arr[i] = start + i * increment;
    }
    
    return arr;
}

// running on terminal
console.log(createNumbers(-9,9));  