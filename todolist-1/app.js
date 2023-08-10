const express = require('express');
const bodyParser = require('body-parser');
let ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let newItems = [];

app.get('/', (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);

    res.render("list", { KindOfDay: day, newListItems: newItems }); // Corrected variable name here
});

app.post('/', (req, res) => {
    let newItem = req.body.newItem; // Declare newItem here
    newItems.push(newItem); // Update the newItems array
    res.redirect('/');
});

app.listen(3000, () => console.log("Server is running on port 3000"));
