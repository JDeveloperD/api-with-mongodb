const {Schema, model} = require('mongoose')

const uniqueValidatio = require('mongoose-unique-validator');

const AftSchema = new Schema({
    name: String,
    discountRate: Schema.Types.Decimal128,
    delete: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

module.exports = {
    Afp: model('Afp', AftSchema)
};