const User = require('../models/User')

const userController = {
    index: async (req,res) => {
        try {
            const users = await User.find({})
            res.json(users)
        } catch(error) {
             console.log(error)   
        }
    },
    show: async (req,res) => {
        try {
            const userID = req.params.id
            const user = await User.findByID(userID)
            res.json(user)
        } catch(error) {
            console.log(error)
        }
    },
    create: async (req,res) => {
        try {
            const newUser = req.body
            const savedUser = await User.create(newUser)
            res.json(newUser)
        } catch(error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    update: async (req,res) => {
        try {
            const userID = req.params.id
            const updatedUser = req.body
            const savedUser = await User.findByIdAndUpdate(userID, updatedUser, {new: true})
            res.json(saveduser)     
        } catch(error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    delete: async (req,res) => {
        try {
            const userID = req.params.id
            const deletedUser = await User.findByIdAndRemove(userID)
            res.json(deletedUser) 
        } catch(error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}