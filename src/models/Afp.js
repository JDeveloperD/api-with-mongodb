const {Schema, model} = require('mongoose')

const AftSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    discountRate: { 
        type: Schema.Types.Decimal128,
        required: [true, "Tasa de descuento requerido"],
    }
}, {timestamps: true});

AftSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.discountRate = ret.discountRate.toString();
      return ret;
    },
});

module.exports = {
    Afp: model('Afp', AftSchema)
};