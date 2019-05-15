const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')
/* Routes for the user */
router.get('/', userController.index)
router.post('/', userController.create)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

const wineController = require('./controllers/wineController')
/* Routes for wine */
router.get('/', wineController.index)
router.get('/wines?{type}', wineController.showByType)
router.get('/wines?{varietal}', wineController.showByVarietal)
router.get('/wines?{producer}', wineController.showByProducer)
router.post('/', wineController.addWine)
router.put('/:id', wineController.update)
router.delete('/:id', wineController.delete)


module.exports = router