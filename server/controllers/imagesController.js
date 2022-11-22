const pool = require('../db');
const queries = require('../queries/mainPage');

const createMainPageImg = async (req, res) => {
    try {
        const {image} = req.body;
        console.log(image)
        const createImg = await pool.query(queries.createImages,[image])
        res.json(createImg.rows);
    } catch (err) {
        console.error(err.message);
    }
};

const getAllMainPageImg = async (req, res) => {
    try {
        const allImg = await pool.query(
        queries.getAllImages,
        );
        res.json(allImg.rows);
    } catch (err) {
        console.error(err.message);
    }
};
  
const getOneMainPageImg = async (req, res) => {
    try {
        const {id} = req.params;
        const singleImg = await pool.query(queries.getOneImages, [
        id,
        ]);
        res.json(singleImg.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    createMainPageImg,
    getAllMainPageImg,
    getOneMainPageImg,
};