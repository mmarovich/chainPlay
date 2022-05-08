const asyncHandler = require('express-async-handler')

const getGoals = asynchandler(async (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})

const setGoals = asynchandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set Goal'})
})

const updateGoals = asynchandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

const deleteGoal = asynchandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, setGoals, updateGoals, deleteGoal
}