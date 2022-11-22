const Router = require('express');

const router = Router();
const {
    createMainPageImg,
    getAllMainPageImg,
    getOneMainPageImg,
} = require('../controllers/imagesController');

router.get('/', getAllMainPageImg);
router.get('/:id', getOneMainPageImg);
router.post('/',createMainPageImg);

module.exports = router;