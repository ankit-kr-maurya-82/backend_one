import express from "express"
import bcrypt from "bcrypt"
import User from "../models/user.model.js"

const router = express.Router();

router.post("/create", async(req, res)=> {
    try {
        const {username, email, password, age} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields reuired"})
        }

        // const has
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

export default router