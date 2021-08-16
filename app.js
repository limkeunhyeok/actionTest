const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/action", (req, res) => {
    res.send("hello world!");
});

app.get("/test2", (req, res) => {
    res.send("test!");
});

app.listen(4000, () => {
    console.log("git action test!")
})