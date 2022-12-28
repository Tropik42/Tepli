const path = require('path');
const fs = require('fs');
const pool = require('../db');
const queries = require('../queries/price');

const getPrice = async (req, res) => {
    try {
        const price = await pool.query(
            queries.getAllPrice,
        );
        return res.json(price.rows);
    } catch (err) {
        console.error(err.message);
    }
};

const getOneFilePrice = async (req, res) => {
    try {
        const {id} = req.params;
        const singleFile = await pool.query(queries.getOneFilePrice, [
            id,
        ]);
        console.log(singleFile);
        return (res.json(singleFile.rows[0]));
    } catch (err) {
        console.error(err.message);
    }
};
const updateFilePrice = async (req, res) => {
    try {
        const {id} = req.params;
        const {pricePath} = req.files;
        const singleFile = await pool.query(queries.getOneFilePrice, [
            id,
        ]);
        const fileDelName = singleFile.rows[0].pricePath;
        console.log(fileDelName);
        await fs.unlink(path.resolve(__dirname, '..', 'static', fileDelName), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Файл удалён');
            }
        });
        const fileName = pricePath.name;
        pricePath.mv(path.resolve(__dirname, '..', 'static', fileName));
        const createFile = await pool.query(queries.updateFilePrice, [fileName, id]);

        return res.json(createFile);
    } catch (err) {
        return (
            console.error(err.message));
    }
};

module.exports = {
    getPrice,
    getOneFilePrice,
    updateFilePrice,
};
