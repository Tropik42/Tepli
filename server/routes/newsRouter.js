const Router = require('express')
const router = Router()
const newsController = require('../controllers/newsController')

const pool = require('./../db')

// router.get('/', newsController.allNews )
// router.get('/:id', newsController.singleNews )
// router.post('/', newsController.newNews)
// router.delete('/:id', newsController.deleteNews)
// router.put('/:id', newsController.updateNews)

router.get('/', async (req, res) => {
    try {
        const allNews = await pool.query(
            "SELECT * FROM news ORDER BY news_id")
        res.json(allNews.rows)
        console.log('Был получен запрос всех новостей')
    } catch (err) {
        console.error(err.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const singleNews = await pool.query(
            "SELECT * FROM news WHERE news_id = $1", [
                id
            ]);
        res.json(singleNews.rows[0])
        console.log(`Был получен запрос новости №${id}`)
    } catch (err) {
        console.error(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const {
            title,
            body
        } = req.body
        const newNews = await pool.query(
            "INSERT INTO news (title, body) VALUES($1, $2) RETURNING *",
            [title, body])
        res.json(newNews.rows)
    } catch (err) {
        console.error(err.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const deleteNews = await pool.query(
            "DELETE FROM news WHERE news_id = $1", [
                id
            ]);
        res.json(`Новость №${id} была удалена.`)
        console.log(`Новость №${id} была удалена.`)
    } catch (err) {
        console.error(err.message)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const {
            title,
            body
        } = req.body
        const updateNews = await pool.query(
            "UPDATE news SET title = $1, body = $2 WHERE news_id = $3", [
                title, body, id
            ])
        res.json(`Новость №${id} была обновлена`)
    } catch (err) {
        console.error(err.message)
    }
})


module.exports = router
