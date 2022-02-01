const numbers = [1,2,3,4,5,6,7,8,9,10]

// function filterOutOdds() {
//      var nums = Array.prototype.slice.call(arguments);
//      return nums.filter(function(num) {
//        return num % 2 === 0
//      });
//    }

/* Write an ES2015 Version */

const filterOutOdds = (...arr) => arr.filter((num) => num % 2 === 0)

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

function findMin(...nums){
    return nums.reduce((val, curVal) => (curVal < val) ? curVal : val)
}

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the 
// keys and values of the first object and second object.

function mergeObjects(obj1, obj2){
    const mergedObj = {...obj1, ...obj2};
    return mergedObj;
}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...addNums){
    const doubledNums = addNums.map((num) => num * 2)
    const finalArr = [...arr, ...doubledNums];
    return finalArr;
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const i = Math.floor(Math.random() * items.length);
    const newArr = [...items.slice(0, i), ...items.slice(i + 1)];
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj};
    if(newObj[key] != undefined){
        newObj[key] = val;
    }
    return newObj;
}