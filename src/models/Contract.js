const {Schema, model} = require('mongoose')

const uniqueValidatio = require('mongoose-unique-validator');

const ContractSchema = new Schema({
    startDate: Date,
    endDate: Date,
    _afpId: { type: Schema.Types.ObjectId, ref: 'Afp' },
    householdAllowance: Boolean,
    weeklyHours: Number,
    hourlyValue: Schema.Types.Decimal128,
    state: Boolean,
    _employeeId: { type: Schema.Types.ObjectId, ref: 'Employee' },
    delete: {
        type: Boolean,
        default: false,
    }
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