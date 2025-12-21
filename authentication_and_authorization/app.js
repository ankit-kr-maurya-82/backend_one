import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import User from "./models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      // console.log(hash);
      let createdUser = await User.create({
        username,
        email,
        password: hash,
        age,
    });

    let token = jwt.sign({email}, "aaaassssdddd")
    res.cookie("token", token)

    res.send(createdUser);
    });
  });

});

app.get("/login", function(req,res){
    res.render("login")
})

app.post("/login", async function(req,res){
    let user = await User.findOne({email: req.body.email})
    if(!user) return res.send("something is wrong")
    // console.log(user.password, req.body.password);
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result){ 
            let token = jwt.sign({email: user.email}, "aaaassssdddd")
            res.cookie("token", token)
            res.send("yes you can login");
        }
        else res.send(" something is wrong ");
        
    })
    
})

app.get("/logout", function(req,res){
    res.cookie("token", "")
    res.redirect("/")
})

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
