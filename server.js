const express = require ("express");
const path = require("path");
const fs = require ("fs");

const app = express();
const PORT = process.env.PORT || 8080

let notes = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/notes", function(err,res){
res.json(notes)
});

