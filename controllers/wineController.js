const Wine = require('..models/Wine')

const wineController = {
    index: async (req,res) => {
        try {
            const wines = await Wine.find({})
            res.json(wines)
        } catch(error) {
            console.log(error) 
        }
    },
    showByType: async (req,res) => {
        try {
            const wineType = req.params.type
            const wines = await Wine.find(wineType)
            res.json
        } catch(error) {
            console.log(error)
            res.json(error)
        }
    },
    showByVarietal: async (req,res) => {
        try {
            const wineVarietal = req.params.varietal
            const wines = await Wine.find(wineVarietal)
            res.json
        } catch(error) {
            console.log(error)
            res.json(error)
        }
    },
    showByProducer: async (req,res) => {
        try {
            const wineProducer = req.params.producer
            const wines = await Wine.find(wineProducer)
            res.json
        } catch(error) {
            console.log(error)
            res.json(error)
        }
    },
    addNew: async (req,res) => {
        try {
            const addWine = req.body
            const newWine = await Wine.create(addWine)
            res.json(newWine)
        } catch(error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    update: async (req,res) => {
        try {
            const recordID = req.params.id
            const updatedWine = await Wine.findByIdAndUpdate(recordID)
            res.json(updatedWine)
        } catch(error) {
            console.log(error)
            res.status(500).json(err)
        }
    },
    delete: async (req,res) => {
        try {
            const recordID = req.params.id
            const deletedWine = await Wine.findByIdAndDelete(recordID)
            res.json(deletedWine)
        } catch(error) {
            console.log(error)
            res.status(500).json(error)
        }
    } 

}