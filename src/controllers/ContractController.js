const { Contract } = require('../models/Contract');
const { Employee } = require('../models/Employee');
const ContractService = require('../services/ContractService');

module.exports = {
    getAll: async (req, res) => {
        try {
            const contracts = await Contract.find();
        
            res.status(200)
                .json({
                    message: 'Todos los contratos',
                    data: contracts
                })
        } catch (e) {
            res.status(400)
                .json({
                    message: 'Internal error',
                    data: e.message
                })
        }
    },

    create: async (req, res) => {
        try {
            
            const data = req.body;
            const contract = new Contract(data);
    
            // validar que el empleado y el afp existan en la bd
    
            await contract.save(function(err) {
                if (err) return handleError(err);
            });
    
        } catch (e) {
            res.status(400)
                .json({
                    message: 'Internal error',
                    data: e.message
                })
        }
    }
}