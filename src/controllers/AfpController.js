const { Afp } = require('../models/Afp');

module.exports = {
    getAll: async (req, res) => {

        const afps = await Afp.find();
    
        res.json({
            message: "todos los afps",
            data: afps
        });
    },

    create: async (req, res) => {
        try {
            const data = req.body;
            await Afp.create(data);
    
            res.status(201)
                .json({
                message: "Afp creado",
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