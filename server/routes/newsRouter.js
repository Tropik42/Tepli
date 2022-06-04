const Router = require('express')
const router = Router()
const {
    getAllNews,
    getOneNews,
    createNews,
    deleteNews,
    updateNews,
} = require('../controllers/newsController')

router.get('/', getAllNews)

router.get('/:id', getOneNews)

router.post('/', createNews)

router.delete('/:id', deleteNews)

router.put('/:id', updateNews)

module.exports = router
