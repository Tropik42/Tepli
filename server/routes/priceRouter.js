const Router = require('express');

const router = Router();
const {
    getPrice,
    getOneFilePrice,
    updateFilePrice,
} = require('../controllers/priceController');

router.get('/', getPrice);
router.get('/:id', getOneFilePrice);
router.put('/:id', updateFilePrice);

module.exports = router;
