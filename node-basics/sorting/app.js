var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", (line) => {
  var num = line.split(" ").map(x => parseInt(x));
  if (process.argv[2] == "asc") {
    num.sort((a, b) => a - b);
  }
  if (process.argv[2] == "desc") {
    num.sort((a, b) => b - a);
  }
  console.log(num);
});

