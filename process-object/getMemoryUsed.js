const initialMemoryUsage = process.memoryUsage().heapUsed;

for (let index = 0; index < 10000; index++) {}

const currentMemoryUsage = process.memoryUsage().heapUsed;

module.exports = [initialMemoryUsage, currentMemoryUsage];
