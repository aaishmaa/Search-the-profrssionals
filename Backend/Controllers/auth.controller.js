let users = []; //In-memory user storage(temporary)

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export async function register(req, res) {
    try {
        const { username, password, email } = req.body;

        const existing = await User.findOne({ username });
        if (existing) return res.status(400).send({ message: "User exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}


export  async function login(req, res) {
    try{
    const{username, password } = req.body;
    const user = await User.findOne({username});
    if(!user)return res.status(401).send( "User not found" );

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({id : user._id}, process.env.JWT_SECRET,{expiresIn: "1h"}); 
    res.json({message:"Login successfully", user, token});

   
    } catch(e) {
   
    return res.status(500).json(e);
    
    }

}
 
export async function getAllUsers(req, res) {
    try{
        const searchQuery = req.query.search || "";

        const users = await User.find(
      {
        username: { $regex: searchQuery, $options: "i" }
      },
      { password: 0 }
    );
        res. status(200).json(users);
    } catch(e) {
        console.error("Get users error:", e.message);
        res.status(500).json({message: "Error fetching users"})
    }

} 



