const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    isAdmin: {type: DataTypes.BOOLEAN, }
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    body: {type: DataTypes.TEXT, unique: true},
    heading: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING},
    news_date: {type: DataTypes.DATE, allowNull: false}
})

User.hasMany(News)
News.belongsTo(User)

module.exports = {
    User,
    News
}
