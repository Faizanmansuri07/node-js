const { error } = require("console")
const fs = require("fs")
const express = require("express")
const path = require("path")
const chalk = require("chalk")
const app = express()
app.use(express.json())
const port = 4000;


const filePath = path.join(__dirname, "Data.json");

app.get("/books", (req, res) => {
    fs.readFile("data.json", "utf8", (error, data) => {
        if(error) return
            const books  = JSON.parse(data || "[]")
            console.log(books);
            
            res.send(books)
    })
})

app.post("/books", (req,res) => {
    const book = {
        id :Date.now(),
         ...req.body
    };

    fs.readFile(filePath, "utf8",(error, data) => {
        if(error) return
        let books = []
        try {
            books = JSON.parse(data || "[]")
        } catch (error) {
            console.log(error);
        }
        books.push(book)

        fs.writeFile(filePath, JSON.stringify(books, null, 2), (err) => {
            if (err) return res.status(500).send("Error writing file");
            res.send("Book added successfully");
    });
    })
})

app.put("/books/:id", (req, res) => {
    const id = req.params.id;
    const books = JSON.parse(fs.readFileSync(filePath, "utf8"));

      const updatedBooks = books.map((book) => {
    if (book.id == id) {
      return { ...book, ...req.body }; // Update only matched book
    }
    return book;
  });

    fs.writeFile(filePath, JSON.stringify(updatedBooks, null, 2), (err, data) => {
        if(err) return
        res.send(updatedBooks)
    })
})




app.listen(port, () => {
    console.log(chalk.green("server is running on http://localhost:4000"));
    
})