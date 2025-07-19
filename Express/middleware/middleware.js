const express = require("express")
const cors = require("cors")
const chalk = require("chalk")
//CORS allows your frontend (from another domain/port) to safely talk to your backend 
// by bypassing browser's same-origin security policy.
const app = express();

app.use(cors()); // cross origin resource sharing (not useful in this case)
app.use(express.json())
const port = 4000;


// middleware  : = 3 params (req, res, next)
//Global middleware (always runs)
app.use((req,res,next) => {
    console.log("Middleware executed..!");
    next(); // next is used to passs the middleware to 
    // id there is another middlerware then it execute it otherwise it exexcute the route handler

})

// Specific middleware
// only runs when route handler's path matches to middleware path 
app.use("/info", (req, res, next) => {
    console.log("/info middleware runs")
    next()
})

// passing auth into route handlers
const auth = (req, res,next) => {
    console.log("rute handlers runs");
    next()
}


app.get("/about", (req, res) => {
    console.log("Get method runs for /about");
    
    res.send({msg : "request fullfield /about"})
})

app.get("/info", (req, res) => {
    console.log("Get  method runs for /info");
    res.send({msg : "request fullfield for /info"})
})

// route handlers with specific middleware
app.get("/auth", auth, (req,res) => {
    console.log("get method for /auth");
    
})



app.listen(port,() => {
    console.log(chalk.red("server is running om http://localhost:4000"));
    
})

// Execution flow

// Incoming Request
//        ↓
// Run Global Middleware (always)
//        ↓
// Check Specific Middleware Path Match
//        ↓
// If matched → run middleware
//        ↓
// Check for Route Handler Match
//        ↓
// Execute Route Code
//        ↓
// res.send() or res.json()
//        ↓
// Response Sent to Client
