const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world222222");
});

app.get("/action", (req, res) => {
    res.send("hello world!2222222");
});

app.get("/test", (req, res) => {
    res.send("test!222222");
});

app.listen(4000, () => {
    console.log("git action test!")
})