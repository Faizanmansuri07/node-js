const { error } = require("console");
const fs = require("fs")

//used for reading file syncronus ky blocking code
const data = fs.readFileSync("Hello.txt", "utf8");
console.log(data);
console.log("ABCD");


const data1 = fs.readFile("Hello.txt", "utf8", (error, data) => {
    if(error) {
        console.log(error);
        return
    }
    console.log(data);
    
})

console.log("Heyyy");

// note : diff btw readFile & readFileSync 
// readFileSync is sync operation blocking code it not move to the second part untill the file read completely
// readFile : is a async op on file it continue other work and also perform file op in background 

// more methods of fs module 
fs.writeFileSync("Hello.txt", "Faizan");
fs.appendFileSync("Hello.txt", "Heyyyy Bro..! ")

fs.mkdir("folder", (error, data) => {
    if(error) return
    console.log(data);
    
})

fs.unlinkSync("Hello.txt")