const { spawn } = require('child_process');
const child = spawn('node', ['childProcess.js']);
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });