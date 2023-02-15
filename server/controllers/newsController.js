const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
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
                    img: el.img,
                });
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
        const img = req.files;
        const file = () => {
            if (req.files.img.length > 1) {
                const fileName = [];
                img.img.forEach((el) => {
                    const element = el;
                    el = `${uuid.v4()}.jpg`;
                    element.mv(path.resolve(__dirname, '..', 'static', el));
                    fileName.push(el);
                });
                return fileName;
            }
            const fileName = `${uuid.v4()}.jpg`;
            img.img.mv(path.resolve(__dirname, '..', 'static', fileName));
            return [fileName];
        };
        const createNews = await pool.query(queries.createNews, [
            title, body, JSON.stringify(file()),
        ]);
        return res.json(createNews);
    } catch (err) {
        console.error(err.message);
    }
};

const updateNews = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, body} = req.body;
        const img = req.files;
        const singleImg = await pool.query(queries.getOneNews, [
            id,
        ]);
        if (singleImg.rows[0].img) {
            singleImg.rows[0].img.map(async (el) => {
                await fs.unlink(path.resolve(__dirname, '..', 'static', el), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`Файл "${el}" удалён`);
                    }
                });
            });
        }
        const file = () => {
            if (req.files.img.length > 1) {
                const fileName = [];
                img.img.forEach((el) => {
                    const element = el;
                    el = `${uuid.v4()}.jpg`;
                    element.mv(path.resolve(__dirname, '..', 'static', el));
                    fileName.push(el);
                });
                return fileName;
            }
            const fileName = `${uuid.v4()}.jpg`;
            img.img.mv(path.resolve(__dirname, '..', 'static', fileName));
            return [fileName];
        };
        const updatedNews = await pool.query(queries.updateNews, [
            title, body, id, JSON.stringify(file()),
        ]);
        return res.json(updatedNews);
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
