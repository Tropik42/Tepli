const Router = require('express');

const router = Router();
const {
    getAllContacts,
    updateContacts,
} = require('../controllers/contactsController');

router.get('/', getAllContacts);
router.put('/:id', updateContacts);

module.exports = router;
