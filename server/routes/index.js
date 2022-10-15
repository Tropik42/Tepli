const Router = require('express');

const router = Router();

const userRouter = require('./userRouter');
const newsRouter = require('./newsRouter');

router.use('/users', userRouter);
router.use('/news', newsRouter);

module.exports = router;
