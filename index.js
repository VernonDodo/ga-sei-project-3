const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')
/* Routes for the user */
router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/:id', userController.show)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

const wineController = require('./controllers/wineController')
/* Routes for wine */
router.get('/wines', wineController.index)
router.get('/wines/:type', wineController.showByType)
router.get('/wines/:varietal', wineController.showByVarietal)
router.get('/wines/:vintage', wineController.showByVintage)
router.get('/wines/:producer', wineController.showByProducer)
router.post('/wines', wineController.addWine)
router.put('/wines/:id', wineController.update)
router.delete('/wines/:id', wineController.delete)


module.exports = router