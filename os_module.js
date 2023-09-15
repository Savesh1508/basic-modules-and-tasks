const os = require('os');
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);

const cpus = os.cpus()

for (let i = 0; i < cpus.length - 2; i++) {
  const CPUcore = cpus[i]
  console.log(`The ${i+1} - th core has started working`);
}

console.log(process.pid);
console.log(os.freemem());
console.log(os.hostname());