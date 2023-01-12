const pool = require('../db');
const queries = require('../queries/contacts');

const getAllContacts = async (req, res) => {
    try {
        const Contacts = await pool.query(
            queries.getContacts,
        );
        res.json(Contacts.rows);
    } catch (err) {
        console.error(err.message);
    }
};
const updateContacts = async (req, res) => {
    try {
        const {id} = req.params;
        const {Phone, Email, Network} = req.body;
        const obj = {
            phone: Phone,
            email: Email,
            network: Network,
        };
        const json = JSON.stringify(obj);
        await pool.query(queries.updateContacts, [
            json, id,
        ]);
        res.json(`contacts №${id} был обновлен`);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    getAllContacts,
    updateContacts,
};
