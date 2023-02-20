const path = require('path');
const fs = require('fs');
const pool = require('../db');
const queries = require('../queries/price');

const getPrice = async (req, res) => {
    try {
        const {rows} = await pool.query(
            queries.getAllPrice,
        );
        return res.json(rows);
    } catch (err) {
        console.error(err.message);
    }
};

const getOneFilePrice = async (req, res) => {
    try {
        const {id} = req.params;
        const {rows} = await pool.query(queries.getOneFilePrice, [
            id,
        ]);
        return (res.json(rows[0]));
    } catch (err) {
        console.error(err.message);
    }
};
const updateFilePrice = async (req, res) => {
    try {
        const {id} = req.params;
        const {pricePath} = req.files;
        const {rows} = await pool.query(queries.getOneFilePrice, [
            id,
        ]);
        const fileDelName = rows[0].pricePath;
        await fs.unlink(path.resolve(__dirname, '..', 'static', fileDelName), (err) => {
            if (err) {
                console.error(err);
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
