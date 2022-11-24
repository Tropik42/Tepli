const pool = require('../db');
const queries = require('../queries/mainPage');
const uuid = require ('uuid')
const path = require('path')

const createMainPageImg = async (req, res) => {
    try {
        const {img} = req.files
        console.log(img)
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const createImg = await pool.query(queries.createImages,[{img:fileName}])

        return res.json(createImg);
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