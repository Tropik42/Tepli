const Router = require('express');

const router = Router();

const userRouter = require('./userRouter');
const newsRouter = require('./newsRouter');
const aboutRouter = require('./aboutRouter');
const mainPageRouter = require('./mainPageRouter');
const priceRouter = require('./priceRouter');

router.use('/user', userRouter);
router.use('/news', newsRouter);
router.use('/about', aboutRouter);
router.use('/price', priceRouter);
router.use('/', mainPageRouter);
module.exports = router;
