const { Router } = require('express')
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "ehy",
        "website": "ehylin.com"
    }
    res.json(data);
})


module.exports = router;