const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({

    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    category:{type: String, required: true},
    amount:{type: Number, required: true},
    date:{type: Date, required: true},
    description: {type: String, required: false}
})

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;