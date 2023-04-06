// let input = process.argv.slice(2, 3);

// const message = (name) => {
// 	console.log(`Hello ${name}`);
// };

// message(input);

// const server = new Server({
// 	host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com",
// });

// let age = input;
// let hasil = age > 18 ? true : false;
// console.log(hasil);
//  tanda tanya (?) dalam percabangan memiliki arti
//   value 1 akan dijalankan jika bernilai true
//   value 2 akan dijalankan jika bernilai false

// mengambil banyaknya memory yang terpakai
// let memoryused = process.memoryUsage();

// console.log(memoryused);

// mengambil argumen ketika menjalankan js menggunakan node
let firstName = process.argv[2];
let lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);
