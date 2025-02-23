const express = require('express');
const router  = express.Router();
const app = express()

const {registerUser,loginUser,forgotPassword,adminLogin, generateBill} = require('../controllers/authController');



router.route('/login').post(loginUser)

router.route('/register').post(registerUser);

router.route('/adminlogin').post(adminLogin);

router.route('/password/forgot').post(forgotPassword);

router.route('/generateBill').post(generateBill);



module.exports = router; 



// -------------------------------------------------------------------------------------------------

// const express = require('express')
// const body_parser = require('body-parser')
// const cors = require('cors')
// const {registerUser,loginUser,forgotPassword,adminLogin} = require('../controllers/authController');

// const app = express()
// app.use(cors())
// app.use(body_parser.urlencoded({extended:true}))
// app.use(body_parser.json())



// app.post('/api/v1/login',async(req,res)=>{
//     const user = await loginUser(req.body)
//     console.log(user)
//     res.send('kkkkkkk')
// })


// app.listen(3000)    


