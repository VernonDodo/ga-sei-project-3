const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const wineController = require('../controllers/wineController')

/* User Routes */
router.get('/users', userController.index)
router.get('/users/:id', userController.show)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

/* Wine Routes */
router.get('/', wineController.index)
router.get('/wine/type', wineController.showByType)
router.get('/wine/variety', wineController.showByVariety)
router.get('/wine/vintage', wineController.showByVintage)
router.get('/wine/producer', wineController.showByProducer)
router.post('/', wineController.addNew)
router.put('/:id', wineController.update)
router.delete('/:id', wineController.delete)

