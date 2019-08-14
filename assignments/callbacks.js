// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const itemsDup =['Pencil', 'Notebook', 'yo-yo', 'Gum', 'NoteBook', 'Gum', 'pencil', 'yo-yo'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, (len) => console.log(len));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items, (lastOne) => console.log(lastOne));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
let sumResult = (add) => console.log(add);
sumNums(2,3,sumResult);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
let multResult = (mult) => console.log(mult);
multiplyNums(4,5,multResult);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  var bo = false;
  for(let i=0;i<list.length;i++){
    if(item==list[i]){
      bo = true;
    }
  }
  return cb(bo);
}

let bool = (equalQ) => console.log(equalQ);
contains('Pencil', items, bool);
contains('pop',items,bool);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = [];
  let bool = false;
  for(let i=0;i<array.length;i++){
    
    for(let j=0;j<newArr.length;j++){
      if(array[i]===array[j]){
        bool = true;
      }
    }
    if(bool==false){
      newArr.push(array[i]);
    }
    bool = false;
  }
  return cb(newArr);
}

let noDup = (list) => console.log(list);
removeDuplicates(itemsDup, noDup);
