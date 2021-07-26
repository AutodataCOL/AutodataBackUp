const { Router } = require('express')
const jwt = require('jsonwebtoken')

const authVerification = require('./middlewares/authVerification.js')
const loginValidation = require('./middlewares/loginValidation.js')

const userController = require('./controllers/userController.js')
const inventoryController = require('./controllers/inventoryController.js')
const adminController = require('./controllers/adminController.js')

const router = Router()

// User
router.post('/login', userController.loginUser)
router.get('/home', authVerification, userController.authenticate)

// Inventory
router.get('/inventory', authVerification, inventoryController.getInventory)
router.post('/inventory', authVerification, inventoryController.postInventory)

// Admin
//router.post('/admin', adminController.createAdmin)
router.post('/register', adminController.createUser)

module.exports = router