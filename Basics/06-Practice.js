const { error } = require("console");
const fs = require("fs")
const path = require("path")
const os = require("os")
const http = require("http")

const filePath = path.join(__dirname, "Hello.txt");
console.log(filePath);

fs.writeFile(filePath, "Hello faizan \n how are you ?", (error) => {
    if(error) return
    console.log("file Updated");
    
})

fs.readFile(filePath, "utf8", (error,data) => {
    if(error) return
    console.log("File data : ", data);
    
})
// os module


const server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.writeHead(200, {"Content-Type" : "application/json"})
        res.end(JSON.stringify({
            user : os.hostname(),
            date : new Date().toLocaleString()
        }))
    }  else if(req.url === "/info") {
        res.writeHead(200, {"Content-Type" : "application/json"})
        res.end(JSON.stringify({
            cpuInfo : os.cpus(),
            freeMemory: os.freemem(),
            network : os.networkInterfaces()
        }))
    }
})

server.listen(3000, () => {
  console.log('Server chalu hai at http://localhost:3000');
});