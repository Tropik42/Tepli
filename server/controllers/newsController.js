const {News} = require('../models/models')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')

class NewsController {
    
    async create(req, res, next) { 
        try {
            let filename;     
            if (req.files != null) {
        const {img} = req.files 
        filename = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static_news', filename ))
            }
        const {title, body} = req.body
        const news = await News.create({title, body, img: filename})
        return res.json(news)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    
    async delete(req, res) {
        try {
        const {id} = req.params
        const news = await News.destroy(
            {
                id: req.params.id
            }
        )
        return res.json(news, 'news was deleted')
        
        } catch (e) {
            next(ApiError.badRequest(e.message))  
        }    
    }

    async getAll(req, res) {
        let {limit, page} = req.params
        page = page || 2
        limit = limit || 5
        let offset = page * limit - limit
        let news = await News.findAndCountAll({limit, offset})
        return res.json(news)
    }
    
    async getOne(req, res) {
        const {id} = req.params
        const news = await News.findOne(
            {
                id: req.params.id
            }
        )
        return res.json(news)
    }
}

module.exports = new NewsController()
