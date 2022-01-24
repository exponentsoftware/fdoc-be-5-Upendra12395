const express =  require('express')
const router = express.Router()
const userController = require('./../controllers/user')
const adminAuth = require('../middleware/admin')

router.get('/showUser', adminAuth, userController.getAll)
router.post('/signIn', userController.addUser)
router.post('/logIn', userController.getLogIn)
router.get('/showUser/:id', adminAuth, userController.getOneUser)
router.patch('/updateUser/:id', adminAuth, userController.updateOneUser)
router.delete('/deleteUser', adminAuth, userController.deleteAllUser)
router.delete('/deleteOneUser/:id', adminAuth, userController.deleteOneUser)


//day5
router.get('/todayRegistered', userController.todayRegistered)
router.get('/todayActive', userController.todayActive)
router.get('/weekActive', userController.todayActive)
router.get('/monthActive', userController.todayActive)


module.exports = router