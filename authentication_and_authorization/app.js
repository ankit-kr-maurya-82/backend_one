import express from "express";
const app = express(); // define first
import  userModel  from './models/user.js';

const cookieParser = require("cookie-parser");
import path from "path";


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser);

app.get("/", (req, res) => {
    res.render("index");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

