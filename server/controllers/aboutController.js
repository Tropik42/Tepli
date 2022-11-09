const pool = require('../db');
const queries = require('../queries/about');

const getAbout = async (req, res) => {
  try {
    const aboutCompany = await pool.query(
      queries.getAbout,
    );
    res.json(aboutCompany.rows);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAbout,
};
