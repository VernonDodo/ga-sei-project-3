const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const wineController = require('../controllers/wineController')

/* User Routes */
router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/:id', userController.show)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

/* Wine Routes */
router.get('/wines', wineController.index)
router.post('/wines', wineController.addNew)
router.get('/wines/:type', wineController.showByType)
router.get('/wines/:variety', wineController.showByVariety)
router.get('/wines/:vintage', wineController.showByVintage)
router.get('/wines/:producer', wineController.showByProducer)
router.get('/wines/:id', wineController.show)
router.put('/wines/:id', wineController.update)
router.delete('/wines/:id', wineController.delete)

module.exports = router

