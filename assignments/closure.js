// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const sentence = () => {
  let text = 'Hello ';
  return (word)=>  { 
    text = text + word + ' ';
    return text; 
  }
}
const addWord = sentence();
addWord('World');
addWord('how');
addWord('are');
addWord('you');

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return ()=> {
    count += 1;
    return count;
  }
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      count += 1;
      return count;
    },
    decrement: function() {
      count -= 1;
      return count;
    },
    value: function() {
      return count;
    }
  };
}
const fluxCounter= counterFactory();

fluxCounter.decrement();
// console.log(fluxCounter.value());
fluxCounter.decrement();
// console.log(fluxCounter.value());
fluxCounter.increment();
// console.log(fluxCounter.value());