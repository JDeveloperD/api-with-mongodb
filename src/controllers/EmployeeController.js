const { Employee } = require('../models/Employee');

module.exports = {
    getAll: async (req, res) => {
        const employees = await Employee.find();

        res.json({
            message: "todos los empleados",
            data: employees
        });
    },

    create: async (req, res) => {
        try {
            const data = req.body;
            await Employee.create(data);
    
            res.status(201)
                .json({
                message: "empleado creado",
                data: data
            });
        } catch (e) {
            res.json({
                message: "error interno",
                data: e.message
            });
        }
    } 
}