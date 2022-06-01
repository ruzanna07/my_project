const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const fs = require("fs")
const {stringify} = require("nodemon/lib/utils");
app.use(bodyParser.json());


app.get("/users", ((req, res) => {
    res.status(200)
}));

app.get("/user/:name", ((req, res) => {
    req.params["name"]
    res.status(200)
}));

app.post("/user", ((req, res) => {
const  stringify = JSON.stringify(req.body)
    res.status(200)
}));

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});

function writeToFile(data, filePath) {
    fs.writeFile(data, filePath)
}

writeToFile(stringify, './users.json')



const  arr = [1,2,9]
const array = arr.map(elm => elm *=elm)
console.log(array)


