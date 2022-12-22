const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const bcrypt =require('bcryptjs');
const userSchema=new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true, 
        unique:true
    }, 
    phone:{
        type:String, 
        required:true
    }, 
    password:{
        type:String, 
        required:true
    }, 
    cpassword:{
        type:String, 
        required:true
    }, 
    shopdescription:{
        type:String
    },
    shopaddress:{
        type:String
    },
    shopimage:{
        type:String
    },
    item1name:{
        type:String
    },
    item1image:{
        type:String
    },
    item1desc:{
        type:String
    },
    item2name:{
        type:String
    },
    item2image:{
        type:String
    },
    item2desc:{
        type:String
    },
    item4:{
        type:String
    },
    item4desc:{
        type:String
    },
    item3name:{
        type:String
    },
    item3image:{
        type:String
    },
    item3desc:{
        type:String
    },
    tokens:[
        {
            token:{
                type:String, 
                required:true
            }
        }
    ]
})
//hash password
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password=bcrypt.hash(this.password, 12);
        this.cpassword=bcrypt.hash(this.cpassword, 12);
    }
    next();
});
userSchema.methods.generateAuthToken=async function(){
    try{
        let token= jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}

const User= mongoose.model('USER', userSchema);
module.exports=User;