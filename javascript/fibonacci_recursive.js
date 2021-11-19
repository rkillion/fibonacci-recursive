function fibonacci(n) {
  // type your code here
  //make a function that makes the fibonacci sequence
  const fib = [0,1]
  //takes in an array, checks if it's n-1 long, if so, returns that number
  function buildFib(arr,count) {
    return count===n ? arr[1] : buildFib([arr[1],arr[0]+arr[1]],++count)
  }
  return n===0 ? 0 : buildFib(fib,1);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
