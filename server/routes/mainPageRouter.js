const Router = require('express');

const router = Router();
const {
    createMainPageImg,
    getAllMainPageImg,
    getOneMainPageImg,
    deleteImages,
    updateImages,
} = require('../controllers/imagesController');

router.get('/', getAllMainPageImg);
router.get('/:id', getOneMainPageImg);
router.post('/', createMainPageImg);
router.delete('/:id', deleteImages);
router.put('/:id', updateImages);
module.exports = router;
