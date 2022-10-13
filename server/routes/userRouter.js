const Router = require('express');

const router = Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  userCheck,
  getAllUsers,
  userLogin,
  createUser
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.post('/login', userLogin);
router.get('/auth', authMiddleware, userCheck);
router.post('/', createUser);

module.exports = router;
