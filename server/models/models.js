const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    isAdmin: {type: DataTypes.BOOLEAN, }
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
    body: {type: DataTypes.TEXT},
    img: {type: DataTypes.STRING},
})

User.hasMany(News)
News.belongsTo(User)

module.exports = {
    User,
    News
}

