const pool = require('../db');
const queries = require('../queries/news');

const getAllNews = async (req, res) => {
    try {
        const {rows} = await pool.query(
            queries.getAllNews,
        );
        res.json(rows);
    } catch (err) {
        console.error(err.message);
    }
};

const getOneNews = async (req, res) => {
    try {
        const {id} = req.params;
        const {rows} = await pool.query(queries.getOneNews, [
            id,
        ]);
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

const createNews = async (req, res) => {
    try {
        const {title, body} = req.body;
        const {rows} = await pool.query(queries.createNews, [
            title, body,
        ]);
        res.json(rows);
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
