const express = require('express');
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
    res.send("This is the Shinoa File Network.");
});

app.get('/ping/', function (req, res) {
    if(!req.query.time) return res.json(JSON.parse('{ "err": "no time provided" }'));
    let ping = Date.now() - req.query.time;
    res.json(JSON.parse('{ "ping": "' + ping + 'ms" }'));
});

app.get("/download/", function (req, res) {
    if(!req.query.time) return res.json(JSON.parse('{ "err": "no time provided" }'));


});

app.get("/file/:file/", function (req, res) {

    if(!req.params.file) return res.json(JSON.parse('{ "err": "no file name provided" }'));

    if(!fs.existsSync("./files/" + req.params.file)) return res.json(JSON.parse('{ "err": "invalid file" }'));

    res.sendFile(__dirname + "/files/" + req.params.file);

});

app.listen(2000);
