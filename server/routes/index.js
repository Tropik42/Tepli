const Router = require('express');

const router = Router();

const userRouter = require('./userRouter');
const newsRouter = require('./newsRouter');
const aboutRouter = require('./aboutRouter');

router.use('/user', userRouter);
router.use('/news', newsRouter);
router.use('/about', aboutRouter);
module.exports = router;
