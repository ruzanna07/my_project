<!-- From Error -->
const xlsx = require("xlsx");
const express = require("express");
const file = xlsx.readFile("./homework/excel/students.xls");
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    const sheets = file.SheetNames;
    const students = [];
    for (let i = 0; i < sheets.length; i++) {
        const sheetName = sheets[i];
        const sheetData = xlsx.utils.sheet_to_json(file.Sheets[sheetName]);
        sheetData.forEach((x) => {
            students.push(x)});
        }
res.send(students)});



app.listen(PORT,() => {
    (`Server listening on port: ${PORT}`);
})

