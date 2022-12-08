const Router = require('express');

const router = Router();
const {
    createMainPageImg,
    getAllMainPageImg,
    getOneMainPageImg,
    deleteImages,
} = require('../controllers/imagesController');

router.get('/', getAllMainPageImg);
router.get('/:id', getOneMainPageImg);
router.post('/', createMainPageImg);
router.delete('/:id', deleteImages);
module.exports = router;
