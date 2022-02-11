const Router = require('express')
const controller = require('./authController')
const{check}=require('express-validator')
const authMiddleware=require('./middleware/authMiddleware')
const roleMiddleware=require('./middleware/roleMiddleware')

const router = new Router


router.post('/registration',[
  check('username','username can`t be empty').notEmpty(),
  check('password', 'password must be lonnger than 4 symbols').isLength({min:4,max:100}),
],controller.registration)
router.post('/login', controller.login)
router.get('/users',roleMiddleware(['ADMIN']), controller.getUsers)

module.exports=router;