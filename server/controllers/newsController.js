const ApiError = require('../error/apiError')
const pool = require('./../db')

const getAllNews = async (req, res) => {
    try {
        const allNews = await pool.query(
          "SELECT * FROM news ORDER BY news_id"
          )
        res.json(allNews.rows)
    } catch (err) {
        console.error(err.message)
    }
}

const getOneNews = async (req, res) => {
    try {
        const {id} = req.params
        const singleNews = await pool.query(
          "SELECT * FROM news WHERE news_id = $1",[
                id
              ])
        res.json(singleNews.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

const createNews = async (req, res) => {
    try {
        const {title, body} = req.body
        const createNews = await pool.query(
          "INSERT INTO news (title, body) VALUES($1, $2) RETURNING *",[
            title, body
        ])
        res.json(createNews.rows)
    } catch (err) {
        console.error(err.message)
    }
}

const deleteNews = async (req, res) => {
    try {
        const {id} = req.params
        const deleteNews = await pool.query(
          "DELETE FROM news WHERE news_id = $1",[
                id
            ]);
        res.json(`Новость №${id} была удалена.`)
    } catch (err) {
        console.error(err.message)
    }
}

const updateNews = async (req, res) => {
    try {
        const {id} = req.params
        const {title, body} = req.body
        const updateNews = await pool.query(
          "UPDATE news SET title = $1, body = $2 WHERE news_id = $3",[
                title, body, id
            ])
        res.json(`Новость №${id} была обновлена`)
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = {
    getAllNews,
    getOneNews,
    createNews,
    deleteNews,
    updateNews,
}
