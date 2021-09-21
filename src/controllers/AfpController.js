const { Afp } = require('../models/Afp');
const validationAfp = require('../middleware/afp');

module.exports = {
    getAll: async (req, res) => {
        try {
            const afps = await Afp.find();
        
            res.status(200)
                .json({
                info: {},
                results: afps
            });
        } catch (e) {
            res.status(500)
                .json({
                error: e.message
            });
        }

    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const afp = await Afp.findOne({_id: id});

            if (!afp) {
                res.status(404).json({
                    message: "No existe el empleado"
                });
            } else {
                res.status(200).json({
                    info: {},
                    result: afp
                });
            }
        } catch (e) {
            res.status(500)
            .json({
                error: true,
                message: e.message
            });
        }
    },

    update: async (req, res) => {
        try {
            validationAfp(req.body);

            const { _id, name, discountRate } = req.body;            

            await Afp.findOneAndUpdate(
                { _id: _id },
                { name: name, discountRate: discountRate});

            const afpUpdated = await Afp.findOne({_id: _id});
                
            res.json({
                result: afpUpdated
            });
        } catch (e) {
            res.json({
                error: true,
                message: e.message
            });
        }
    },

    deleteById: async (req, res) => {
        const id = req.body.id;
        try {
            
            await Afp.remove({_id: id}, async function (err, result) {
                if (err) {
                    console.log(err)
                } else {
                    const afps = await Afp.find();
    
                    res.json({
                        results: afps
                    });
                }
            })
        } catch (e) {
            res.status(400)
                .json({
                    error: true,
                    message: e.message
                });
        }
    },

    create: async (req, res) => {
        try {
            validationAfp(req.body);
            const afp = await Afp.create(req.body);
    
            res.status(201)
                .json({
                    data: afp
                });
        } catch (e) {
            res.status(400)
                .json({
                    error: true,
                    message: e.message
                });
        }
    },
}