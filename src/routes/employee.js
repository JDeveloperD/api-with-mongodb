const { Router } = require('express');
const router = Router();

const dataEmployes = require('../../sample.json');

router.get('/', (req, res) => {
   res.status(500).json({
        message: "Get all employess",
        data: dataEmployes
    });
})

router.post('/', (req, res) => {
    res.send('received');
})

module.exports = router;