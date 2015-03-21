var readline = require('readline');
var reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

function AddNumbers(sum, numsLeft, completionCallback) {
  this.sum = sum;
  if (numsLeft === 0) {
    completionCallback(sum);
  }
  else {
    reader.question("enter number: ", function(numString) {
      var num = parseInt(numString);
      console.log("partial sum:" + (sum + num));

      AddNumbers(sum + num, numsLeft - 1, completionCallback);
    });

  }
}

var showSum = function(sum) {
  console.log("total Sum: " + sum);
  reader.close();
};

AddNumbers(0, 5, showSum);

// don't want showSum() because this will pass in the return value of showSum as argument not the actual function.
