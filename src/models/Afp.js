const {Schema, model} = require('mongoose')

const uniqueValidatio = require('mongoose-unique-validator');

const AftSchema = new Schema({
    name: String,
    discountRate: Schema.Types.Decimal128,
}, {timestamps: true});

module.exports = {
    Afp: model('Afp', AftSchema)
};