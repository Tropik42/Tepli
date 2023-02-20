const pool = require('../db');
const queries = require('../queries/about');

const getAbout = async (req, res) => {
    try {
        const {rows} = await pool.query(
            queries.getAbout,
        );
        res.json(rows);
    } catch (err) {
        console.error(err.message);
    }
};

const updateAbout = async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req.body;
        await pool.query(queries.updateAbout, [
            body, id,
        ]);
        res.json(`about №${id} был обновлен`);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    getAbout,
    updateAbout,
};
