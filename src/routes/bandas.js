const { Router } = require('express');
const router = Router();

const bandas = require('../sample.json')
//console.log(bandas);


router.get('/', (req, res) => {
    res.json(bandas);
});

module.exports = router;