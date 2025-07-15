// index.js
const express = require('express');
const chalk = require('chalk');
// Cross-Origin Resource Sharing
//maonly used for when you want to pass data btw to diff port
// in this setuation my html port running on 5500 and the server port is 300
// that's why it not aloud to send request to diff port 
// using cors it aloud user to send request on server
const cors = require('cors'); 

const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get("/about", (req,res) => {
  res.send({av : "sdsd"})
})


app.post("/login", (req,res) => {
  console.log(req.body); // the data which user send via front-end
    res.send({ message: "Data received!", data: req.body });
})
app.listen(port, () => {
  console.log(chalk.green(`🚀 Server running at http://localhost:${port}`));
});
