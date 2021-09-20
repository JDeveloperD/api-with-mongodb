const { Employee } = require('../models/Employee');

module.exports = {
    getAll: async (req, res) => {
        try {
            const employees = await Employee.find();
    
            res.status(200)
                .json({
                    info: {},
                    results: employees
                });
        } catch(e) {
            res.status(500)
                .json({
                    error: e.message
                })
        }
    },

    getByDni: async (req, res) => {
        try {
            let dni = req.params.dni;
            let data = await Employee.findOne({dni});

            res.status(200).json({
                info: {},
                data: data
            })

        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
    },

    getById: async (req, res) => {
        try {
            let id = req.params.id;
            let data = await Employee.findOne({_id: id});

            if (!data) {
                res.status(404).json({
                    message: "No existe el empleado"
                });
            } else {
                res.status(200).json({
                    info: {},
                    result: data
                });
            }

        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
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