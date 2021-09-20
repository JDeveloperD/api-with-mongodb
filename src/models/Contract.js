const {Schema, model} = require('mongoose')

const uniqueValidatio = require('mongoose-unique-validator');

const ContractSchema = new Schema({
    startDate: Date,
    endDate: Date,
    householdAllowance: Boolean,
    weeklyHours: Number,
    hourlyValue: Schema.Types.Decimal128,
    status: {
        type: String,
        default: "vigente"
    },
    _afpId: { type: Schema.Types.ObjectId, ref: 'Afp' },
    position: String,
    _employeeId: { type: Schema.Types.ObjectId, ref: 'Employee' }
}, {timestamps: true});

ContractSchema.virtual('employee', {
    ref: 'Employee',
    localField: 'employeeId',
    foreignField: '_id',
    justOne: true,
});

module.exports = {
    Contract: model('Contract', ContractSchema)
}