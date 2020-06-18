const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

let notes = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/notes", function (err, res) {
  try {
    notesData = fs.readFileSync("db/db.json", "utf8");
    
    notesData = JSON.parse(notesData);
  } catch (err) {
    console.log(err);
  }

  res.json(notesData);
});

app.post("/api/notes", function (req, res) {
  try {
    notesData = fs.readFileSync("./db/db.json", "utf8");
    

   