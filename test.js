const { execSync } = require('child_process');
const assert = require('assert');

const output = execSync('node app.js').toString().trim();

assert.strictEqual(output, 'hii');

console.log("Test passed!");
