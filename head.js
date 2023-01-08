const assertEqual = require("./assertEqual");

// this function returns the first element in an array. 
const head = function(arr) {
    let firstElement;
    if (arr.length < 1) {
        firstElement = undefined;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            firstElement = arr[i];
        }
    }
    return firstElement;
};

module.exports = head;

