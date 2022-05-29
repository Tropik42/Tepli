const {News} = require('../models/models')
const ApiError = require('../error/ApiError')


class NewsController {
    
    async create(req, res) {
        const {name} = req.body
        const news = await News.create({name})
        return res.json(news)
    }
    
    async delete(req, res) {
        
    }

    async getAll(req, res) {
        
    }
    
    async getOne(req, res) {
        
    }
}

module.exports = new NewsController()