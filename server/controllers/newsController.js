const {News} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class NewsController {
    
    async create(req, res, next) {
        try {
        const {title, body} = req.body
        const {img} = req.files
        let filename = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static_news', filename ))
        
        const news = await News.create({title, body, img: filename})
        return res.json(news)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    
    async delete(req, res) {
        
    }

    async getAll(req, res) {
        const news = await News.findAll()
        return res.json(news)
    }
    
    async getOne(req, res) {
        
    }
}

module.exports = new NewsController()