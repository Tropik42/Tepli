const Router = require('express')
const newsController = require('../controllers/newsController')
const router = Router()

router.get('/', newsController.getAll )
router.get('/:id', newsController.getOne ) // Посмотреть конкретную новость отдельно

router.post('/', newsController.create)
router.delete('/:id', () => {
    console.log('aboba');
    newsController.delete})
    

module.exports = router
