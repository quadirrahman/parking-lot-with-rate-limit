const express = require('express')
const router = express.Router()

const slotController = require('../app/controllers/slotController')

router.post('/api/park', slotController.create)
router.delete('/api/park', slotController.destroy)
router.get('/api/park', slotController.show)
// router.post('/api/users/login', usersController.login)
// router.get('/api/users/account', usersController.account)
// router.delete('/api/users/logout', usersController.logout)


// router.get('/api/tasks', tasksController.list)
// router.post('/api/tasks', tasksController.create)
// router.get('/api/tasks/:id', tasksController.show)
// router.put('/api/tasks/:id', tasksController.update)
// router.delete('/api/tasks/:id', tasksController.destroy)

module.exports = router
