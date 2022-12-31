const pool = require('../db');
const queries = require('../queries/news');

const getAllNews = async (req, res) => {
    try {
        const allNews = await pool.query(
            queries.getAllNews,
        );
        const result = allNews.rows.reduce((acc, el) => {
            const index = acc.findIndex(({newsId}) => newsId === el.newsId);
            if (index === -1) {
                acc.push({
                    ...el,
                    img: [el.img],
                })
            } else {
                acc[index].img.push(el.img);
            }
            return acc;
        }, []);

        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
};

const getOneNews = async (req, res) => {
    try {
        const {id} = req.params;
        const singleNews = await pool.query(queries.getOneNews, [
            id,
        ]);
        res.json(singleNews.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

const createNews = async (req, res) => {
    try {
        const {title, body} = req.body;
        const createNews = await pool.query(queries.createNews, [
            title, body,
        ]);
        res.json(createNews.rows);
    } catch (err) {
        console.error(err.message);
    }
};

const updateNews = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, body} = req.body;
        await pool.query(queries.updateNews, [
            title, body, id,
        ]);
        res.json(`Новость №${id} была обновлена`);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    getAllNews,
    getOneNews,
    createNews,
    updateNews,
};
