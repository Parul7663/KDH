const User = require('../models/user')
const Admin = require('../models/admin');
const { response } = require('express');
const sendEmail = require('../utils/sendEmail');
const sendToken = require('../utils/jwtToken');
const { data } = require('autoprefixer');

//resgister a user =>api/v1/regsiter
exports.registerUser = async (req, res, next) => {
    console.log('inside register')
    const { name, email, password } = req.body;
    
    const user1 = new User();
    const user = await User.create({
        name,
        email,
        password,
    })

    const token = user1.getJwtToken();

    res.status(200).json({
        sucess: true,
        token
    })
}


//login user => /api/v1/login
exports.loginUser = async (req, res, next) => {
    console.log("/login authcontroller")

    // const { email, password } = JSON.stringify(req.body)
    const email = req.body.email
    const password = req.body.password
    console.log(JSON.stringify(req.body))

    //check if email and password entered by user
    if (!email || !password) {
        console.log('please enter email and password again ')
    }

    //find user in database
    // const user = await User.findOne({email}).select('+password');
    const user = await User.findOne({ email })
    const pass = await User.findOne({ password })

    if (user == null) {
    // if (user == null) {
        // return ({
        // res.send("User not found")
        res.status(404).json({ message: "User not found" });
        console.log("User not found");
        
    }
    // if (pass == null) {
    // // if (user == null) {
    //     // return ({
    //     // res.send("User not found")
    //     res.status(404).json({ message: "User not found" });
    //     console.log("User not found");
        
    // }
    else {
        // return ({
        //     error: "User found"})
        res.status(200).json({ message: "User found" });
        // res.send({ message: "User found" });
        console.log("User found")
    }

    return await user
}

//login admin => /api/v1/adminlogin
exports.adminLogin = async (req, res, next) => {
    console.log("hello admin ji")
    const { email, password } = req.body

    //check if email and password entered by user
    if (!email || !password) {
        res.send('please enter email and password')
        alert('please enter email and password')
    }
    //find user in database
    const user = await Admin.findOne({ email }).select('+password');

    if (!user) {
        return ({
            error: "Admin not found"
        })
    }


    //checks if password is correct or not 
    const isPasswordMatched = await User.comparePassword(password);

    if (!isPasswordMatched) {
        // res.send('password mismatch')
        return res.status(400).json({
            error: "Passwords do not match"
        })

    }

    res.status(200).json({
        sucess: false,
        token
    });
}


// Forgot Password   =>  /api/v1/password/forgot
exports.forgotPassword = (async (req, res, next) => {
    // let ls = localStorage.getItem('user')
    console.log("inside forgot")
    const user = await User.findOne({ email: req.body.email });
    // const tempemail = req.body.email
    // const user = await User.findOne({tempemail});

    console.log("boooodyyyy" + req.body.email + " now user details " + user)
    const user1 = new User();

    if (!user) {
        return res.status(400).json({
            error: "User not found authcontroller "
        });
    }

    //get reset token 
    const resetToken = user1.getResetPasswordToken();
    // console.log(resetToken )
    // await user.save({validateBeforeSave:false});

    //create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;
    const message = `your password reset token is as follows:\n\n${resetUrl} , if you have not requested this email please ignore`;
    // console.log(message) ;

    try {
        sendEmail({
            email: user.email,
            subject: 'Kapoor Di Hatti password recovery ',
            message
        })
        res.status(200).json({
            sucess: true,
            message: `Email sent to : ${user.email}`
        })
    } catch (error) {
        console.log(error)
        user.resetPasswordToken = undefined;
        user.resetPasswordToken = undefined;
        // await user.save({validateBeforeSave:false});

    }
}

)



// worrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
exports.generateBill = (async (req, res, next) => {

    console.log("inside generate bill")
    const user = await User.findOne({ email: req.body.email });

    if(!user){
        alert("please login first")
    }

    const message = `\n\nYour subtotal is : 496.95`+`\n\nTHANK YOU FOR ORDERING FROM KAPOOR DI HATTI`;
    // const message = `your Generated Bill is\n\n ${req.body.cartItems}`+`\n\nYour subtotal is : 496.95`+`\n\nTHANK YOU FOR ORDERING FROM KAPOOR DI HATTI`;

    // const cartItems = JSON.parse(req.body.cartItems)
    const cartItems = req.body.cartItems

    console.log("bogi= " + req.body.email + " \nnow everythin " + user + "\neverythingggggg" +cartItems)
    const user1 = new User();

    if (!user) {
        return res.status(400).json({
            error: "User not found authcontroller "
        });
    }

    try {
        sendEmail({
            email: user.email,
            subject: 'Generated Bill : Kapoor Di Hatti ',
            message
        })
        res.status(200).json({
            sucess: true,
            message: `Email sent to : ${user.email}`
        })
    } catch (error) {
        console.log(error)
        user.resetPasswordToken = undefined;
        user.resetPasswordToken = undefined;
        // await user.save({validateBeforeSave:false});

    }
}

)
