const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const authenticate=require("../middleware/authenticate");
const User = require('../models/userSchema');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const DB = process.env.DBPATH;
mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => { console.log(err) });
//middleware
router.get('/', (req, res) => {
    res.send("Hello1");
});
router.post('/usersignup', async (req, res) => {
    const { name, email, phone, password, cpassword, shopdescription, shopaddress, shopimage, item1name, item1image, item1desc, item2name, item2image, item2desc, item3name, item3image, item3desc} = req.body;
    if (!name || !email || !phone || !password || !cpassword ) {
        return res.status(422).json({ error: "Please Fill All Fields" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "User Already Exists" });
        }
        const user = new User({ name, email, phone, password, cpassword, shopdescription, shopaddress, shopimage, item1name, item1image, item1desc, item2name, item2image, item2desc, item3name, item3image, item3desc });
        await user.save();
        res.status(201).json({ message: "User Registered Successfully" });
        
    } catch (err) {
        console.log("Failed to register")
    }


});
router.post('/userlogin', async (req, res) => {
    try {let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })
        }
        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);
        if (userLogin == null) {
            res.status(400).json({ error: "Invalid Credentials" });
        }
        else {
             token= await userLogin.generateAuthToken();
             if (password != userLogin.password) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.cookie("jwtoken", token, {
                    expires:new Date(Date.now()+25900000),
                    httpOnly:true
                })
                res.json({ message: "User Signin Success" });
            }
        }
    }
    catch (err) {
        console.log(err);
    }
})
router.get('/about',authenticate, (req, res)=>{
         res.send('Hello About World from server ');
});


router.get("/profile/:email", function(req,res){
    User.findOne({email: req.params.email}, function(err,foundUser){
        if(err){
            return res.send(err);
        }
        res.send({user:foundUser});
    })
});
module.exports = router;