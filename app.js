require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;
const routes = require("./routes/")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', routes)



app.listen(PORT, (req, res) => {
    console.log(`Server running on ${PORT}`);
})