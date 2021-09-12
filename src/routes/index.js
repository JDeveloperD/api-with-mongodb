const { Router } = require('express');
const router = Router();


router.get('/api', (req, res) => {
    res.status(200).json({
        'message': 'ok',
    });
});

module.exports = router;