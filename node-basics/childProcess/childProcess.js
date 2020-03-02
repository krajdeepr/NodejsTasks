const os = require('os');
const cpuCount = os.cpus().length;
console.log(`number of cores in CPU are ${cpuCount}`);
console.log(`Node version is ${process.version}`);
