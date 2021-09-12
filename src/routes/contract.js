const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
   res.status(500).json({
        message: "Get all contracts",
    });
})

router.post('/', (req, res) => {
    res.send('received');
})

module.exports = router;