const {query} = require('../db');
const queries = require('../queries/news');

const getAllNews = async (req, res) => {
  try {
    const allNews = await query(
      queries.getAllNews,
    );
    res.json(allNews.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getOneNews = async (req, res) => {
  try {
    const {id} = req.params;
    const singleNews = await query(queries.getOneNews, [
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
    const createNews = await query(queries.createNews, [
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
    await query(queries.updateNews, [
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
