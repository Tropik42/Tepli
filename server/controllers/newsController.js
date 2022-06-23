const ApiError = require('../error/apiError');
const pool = require('../db');
const newsService = require('../queries/news.js')

const getAllNews = async (req, res) => {
    const allNews = await newsService.getAllNews()
    res.status(200).json(allNews)
}


const getOneNews = async (req, res) => {
  const {id} = req.params;
  const oneNews = await newsService.getOneNews(id)
  res.status(200).json(oneNews)
}


const createNews = async (req, res) => {
    const {title, body} = req.body;
    const news = await newsService.createNews({
      title,
      body,
    })
    res.status(201).json(news)
  }

const updateNews = async (req, res) => {
  try {
    const {title, body} = req.body;
    const updatedNews = await newsService.updateNews({
      title,
      body,
      id: req.params.id,
    })
    res.status(201).json(updatedNews)
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
