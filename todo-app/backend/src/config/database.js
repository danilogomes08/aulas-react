const mongoose = require('mongoose')
mongoose.Promise = global.promise
module.exports = mongoose.connect('mongodb://localhost/todo')

