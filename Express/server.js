const express = require("express")
const cors = require("cors")
const chalk = require("chalk")

const app = express();
const port = 4000;

let users = [
    {id : 1, name : "Faizan", mobile : 8780575765},
    {id : 2, name : "Farhan", mobile : 9724238282},
]

app.use(cors())
app.use(express.json())

// get method to get the all users
app.get("/users", (req, res) => {
    res.send(users);
})

//post method to addd a user
app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send({message : "new user added", users : users})
})

//put method to update the user
app.put("/users/:id", (req,res) => {
    const id = parseInt(req.params.id)
    const updatedUser = req.body;
    users = users.map((user) => user.id === id ? updatedUser : user)
    res.send(updatedUser)
})

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    users = users.map((user) => user.id !== id)
    res.send("user deleted")
})

app.listen(port, () => {
    console.log(chalk.greenBright(`server running on  port http://localhost:${port}`))
})