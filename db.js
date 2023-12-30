const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://hari:1234@cluster0.iuj12ti.mongodb.net/employee_db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}