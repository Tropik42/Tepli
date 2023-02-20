const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const pool = require('../db');
const queries = require('../queries/mainPage');

const createMainPageImg = async (req, res) => {
    try {
        const {img} = req.files;
        const fileName = `${uuid.v4()}.jpg`;
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const createImg = await pool.query(queries.createImages, [fileName]);

        return res.json(createImg);
    } catch (err) {
        return (
            console.error(err.message));
    }
};

const getAllMainPageImg = async (req, res) => {
    try {
        const {rows} = await pool.query(
            queries.getAllImages,
        );
        return (res.json(rows));
    } catch (err) {
        return (
            console.error(err.message));
    }
};

const getOneMainPageImg = async (req, res) => {
    try {
        const {id} = req.params;
        const {rows} = await pool.query(queries.getOneImages, [
            id,
        ]);
        return (res.json(rows[0]));
    } catch (err) {
        return (
            console.error(err.message));
    }
};

const deleteImages = async (req, res) => {
    try {
        const {id} = req.params;
        const {rows} = await pool.query(queries.deleteImages, [
            id,
        ]);
        const fileName = rows[0].img;
        await fs.unlink(path.resolve(__dirname, '..', 'static', fileName), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Файл удалён');
            }
        });
        return (res.json(rows[0]));
    } catch (err) {
        return (
            console.error(err.message));
    }
};

const updateImages = async (req, res) => {
    try {
        const {id} = req.params;
        const {img} = req.files;
        const {rows} = await pool.query(queries.getOneImages, [
            id,
        ]);
        const fileDelName = rows[0].img;
        console.log(fileDelName);
        await fs.unlink(path.resolve(__dirname, '..', 'static', fileDelName), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Файл удалён');
            }
        });
        const fileName = `${uuid.v4()}.jpg`;
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const createImg = await pool.query(queries.updateImages, [fileName, id]);

        return res.json(createImg);
    } catch (err) {
        return (
            console.error(err.message));
    }
};

module.exports = {
    createMainPageImg,
    getAllMainPageImg,
    getOneMainPageImg,
    deleteImages,
    updateImages,
};
