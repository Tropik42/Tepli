const Router = require('express');

const router = Router();
const {
    getAbout,
    updateAbout,
} = require('../controllers/aboutController');

router.get('/', getAbout);
router.put('/:id', updateAbout);

module.exports = router;
