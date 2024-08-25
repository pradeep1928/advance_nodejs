// const prom1 = new Promise((resolve, reject) => { 
// 	setTimeout(() => { 
// 		resolve("Resolved First after 1 second"); 
// 	}, 0); 
// }); 

// const prom2 = new Promise((resolve, reject) => { 
// 	setTimeout(() => { 
// 		resolve("Resolved First after 2 seconds"); 
// 	}, 4000); 
// }); 

// const prom3 = 20; 

// try { 
// 	let result = Promise.all([prom1, prom2, prom3]); 
// 	result.then((data) => console.log(data)); 
// } catch (error) { 
// 	console.log(error); 
// }

  
// console.log(str)
// let str
// str = 'hello'


let date = new Date()
let local = date.toLocaleString()
let utc = date.toUTCString()
let time = date.toTimeString()

console.log('local', local)
console.log('utc', utc)
console.log('time', time)
console.log('date', date.getHours())