const importedValue = require("./getMemoryUsed.js");
const importedName = require("./getName.js");

const initialMemoryUsage = importedValue[0]; //todo1
// const yourName = process.argv[2]; //todo2
const yourName = importedName; //todo2
const environment = process.env.NODE_ENV; //todo3

// for (let i = 0; i <= 10000; i++) {
// 	// proses looping ini akan membuat penggunaan memori naik
// }

const currentMemoryUsage = importedValue[1]; // todo4
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
	`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);
