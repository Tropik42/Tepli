const Router = require('express')
const router = Router()
const {
    getAllNews,
    getSingleNews,
    createNews,
    deleteNews,
    updateNews,
} = require('../controllers/newsController')

router.get('/', getAllNews)

router.get('/:id', getSingleNews)

router.post('/', createNews)

router.delete('/:id', deleteNews)

router.put('/:id', updateNews)

module.exports = router
