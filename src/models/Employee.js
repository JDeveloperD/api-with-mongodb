const {Schema, model} = require('mongoose')

const uniqueValidatio = require('mongoose-unique-validator');

const EmployeeSchema = new Schema({
    name: String,
    dni: {
        type: Number,
        unique: true,
        required: true
    },
    address: String,
    phone: String,
    dateBirth: Date,
    maritalStatus: {
        type: String,
        required: true,
        default: "soltero"
    },
    academicDegree: {
        type: String,
        required: true
    },
    avatar: String
}, {timestamps: true});

module.exports = {
    Employee: model('Employee', EmployeeSchema)
}