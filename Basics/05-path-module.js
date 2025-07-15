const path = require("path")
const filePath = "/start/folder/Abc.txt";

// return the base file name like abc.txt from the path
console.log(path.basename(filePath));

// return directory name
console.log(path.dirname(filePath))

// return extention of the file
console.log(path.extname(filePath));

// join parts mainly use for crossplatform compatible 
console.log(path.join("start", "folder", "Abc.txt"));
console.log(path.join(__dirname, "folder", "Abc.txt"));

// return absolute path like full path 
console.log(path.resolve("folder", "Abc.txt"));