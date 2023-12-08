const mongoose = require('mongoose')


const tipsSchema = new mongoose.Schema({


    category:{type: String, required: true},
    isGood:{type: Boolean, required: true},
    tip: {type: String, required: false}
})

const Tips = mongoose.model('Tip', tipsSchema);

module.exports = Tips;