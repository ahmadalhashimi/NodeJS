const mongoose = require('mongoose')

const db = 'mongodb+srv://ahmad:ahmad1234@nodetuts.8o7ya.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect (db)
    .then (res => console.log(res))
    .catch (err => console.log(err))