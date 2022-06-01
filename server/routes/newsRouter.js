const Router = require('express')
const router = Router()
// const newsController = require('../controllers/newsController')

const pool = require('./../db')

// router.get('/', newsController.getAll )
// router.get('/:id', newsController.getOne ) // Посмотреть конкретную новость отдельно
// router.post('/', newsController.create)
// router.delete('/:id', newsController.delete)

router.get('/', async (req, res) => {
    try {
        const allNews = await pool.query("SELECT * FROM news ORDER BY news_id")
        res.json(allNews.rows)
        console.log('Был получен запрос новостей')
    } catch (err) {
        console.error(err.message)        
    }
})

router.post('/', async (req, res) => {
    try {
        const {title, body} = req.body
        const newNews = await pool.query("INSERT INTO news (title, body) VALUES($1, $2) RETURNING *",
        [title, body])
        res.json(newNews.rows)
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router
