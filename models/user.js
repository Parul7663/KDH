const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter name'],
        maxLength:[30,'name cannot exceed 30 characters']
    },
    email:{
        type:String,
        required:[true,'please enter email'],
        unique:true,
        validate:[validator.isEmail,'please enter a valid email']
    },
    password:{
        type:String,    
        required:[true,'please enter an passworod'],
        minLength:[6,'must be at least 6 characters'],
        select:false    
    },
    createdAt:{
        type: Date,
        default: Date.now
    }, 
    resetPasswordToken:  String,
    resetPasswordExpires: Date    
})

//encerypting passwo rd before saving user
//checking password
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
})

//compare user password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);

}

//return jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });
}

//generate password reset token
userSchema.methods.getResetPasswordToken = function(){
    //generate token
    const resetToken = crypto.randomBytes(20).toString('hex');
    //👆generates 20 random bytes , this is a buffer
    
    //encrypting our token by hash and set to resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    //sha256 is algorith value , updat token takes the token we want to hash
    
    //set token expire time
    this.resetPasswordExpires = Date.now()+30*60*1000
    
    return resetToken
    //we are returning the token as it is so hashed(encrypted) token will be saved;
}




module.exports = mongoose.model('User',userSchema);