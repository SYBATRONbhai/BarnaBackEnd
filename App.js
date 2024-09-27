require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hope & You Guys Are Doing Well !");
});

app.get("/twitter", (req, res)=>{
res.send("I5gtf6na");
})

app.get("/login", (req, res)=>{
    res.send("<h1> Please Login at Code with Barnamoy Dhar.</h1>");
    })

    app.get("/youtube", (req, res)=>{
        res.send("<h2>https://youtube.com/</h2>");
        })

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`);
});
