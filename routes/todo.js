const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
const userAuth = require('../middleware/user')
const adminAuth = require('../middleware/admin')


router.get('/showTodo', userAuth, todoController.showToDo); // route to show all todo
router.get('/showToDoForAdmin', adminAuth, todoController.showToDoForAdmin) // route for admin to show todo
router.post('/addTodo', userAuth, todoController.addtodo) // route to add todo
router.get('/getOne/:id', userAuth, todoController.getOnetodo) // route to show one todo by id
router.put('/updateOne/:id', userAuth, todoController.updateOne) // route to update one todo by id
router.delete('/deleteOne/:id', userAuth, todoController.deleteOne) // route to delete one todo by id

//day2 routes

router.get('/categorywise/:category', adminAuth, todoController.fetchByCategory)
router.get('/titlewise/:title', adminAuth, todoController.fetchByTitle)
router.get('/sortBycreatedDate', adminAuth, todoController.sortTodo)
router.patch('/updateStatus/:id', userAuth, todoController.updateStatus)
router.patch('/updateStatusByAdmin/:id', adminAuth, todoController.updateStatusByAdmin)

module.exports = router