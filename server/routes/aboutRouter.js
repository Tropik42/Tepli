const Router = require('express');

const router = Router();
const {
    getAbout,
} = require('../controllers/aboutController');

router.get('/', getAbout);

module.exports = router;
