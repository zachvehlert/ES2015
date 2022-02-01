// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])

// [1,2,3,4]

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")

// 'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// [[1,2,3] : true, [1,2,3] : false]

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
  if ([...new Set(arr)].length == arr.length) {
    return false;
  }
  return true;
};

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values
// are the count of the vowels in the string.

const vowelCount = (str) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const newMap = new Map();
  const strLower = str.toLowerCase();

  const contained = [...strLower].filter((val) => vowels.has(val));
  for (let i of contained) {
    newMap.set(i, contained.filter((val) => val == i).length);
  }
  return newMap;
};
