const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({

    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    category:{type: String, required: true},
    amount:{type: Number, required: true},
    date:{type: Date, required: true},
    description: {type: String, required: false}
})

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;