const os = require('os');
// gives info about system or computer os 


console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Info:", os.cpus());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Uptime:", os.uptime());
console.log("Home Directory:", os.homedir());
console.log("Host Name:", os.hostname());
console.log("User Info:", os.userInfo());
console.log("Network Interfaces:", os.networkInterfaces());