function fibonacci(num) {
  //declaires the function name
  if (num < 2) {
    // if the input is less than 2, then it returns the number
    return num; //returns the number of the input if the number is less than 2 (e.g. input = 0 output = 0)
  }

  let lastTwo = [0, 1]; //initialize an array named lastTwo with the first 2 numbers of the fibonacci sequence defined as 0 and 1; used to store the last two numbers calculated in the sequence as the function interates

  for (let i = 0; i < num - 1; ++i) {
    //initialized the loop with with the number of times being that of the number input -1; the loop is used to calculate the numbers from the third position onwards; i starts at 0 and increments after each iteration until it reaches num -1
    const sum = lastTwo[0] + lastTwo[1]; //inside the loop, the line of code calculates the sum of the two most recent in the sequence to get the next number, it discards the oldest number and includes the newly calculated sum
    lastTwo = [lastTwo[1], sum];
  }
  return lastTwo[1]; //after the loop completes, the function returns the second element of lastTwo wich contains the nth fibonacci number
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~continuous numbers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//initialize the function and have it take a num as a parameter
function fibonacci2(num) {
  //if the number is 0 statement is true, next line
  if (num === 0) {
    return [0]; //if num 0 then it returns 0
  }
  let series = [0, 1]; //initialize the series array with the first 2 numbers, 0 & 1

  for (let i = 2; i < num; ++i) {
    //starting the loop; initialize with i = 2; as long as i is less than the num; ++i increments i by one to iterate through the next cycle of the loop
    const nextNumber = series[i - 1] + series[i - 2]; //this calculates the next fibonacci number sa the sum of the last two numbers in the series
    series.push(nextNumber); //This adds the next fib number to the series array
  }
  return series;
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
