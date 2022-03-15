const express = require('express')
const mongoose = require('mongoose')
//Path нужен, чтобы статик нормально работал
const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/mainroute')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})

//Движок для рендеринга страниц, hbs - название
app.engine('hbs', hbs.engine)
//Указываем, что по умолчанию используем handlebars, hbs должна совпадать со строчкой выше
app.set('view engine', 'hbs')
//Регистрируем папку, где хранятся все виды ключом views (1), views - указываем явно, откуда берутся страницы
app.set('views', 'views')

//Нужно, чтобы нормально работали статические файлы
app.use(express.static(path.join(__dirname, 'public')))


app.use(todoRoutes)

async function start() {
	try {
		// await mongoose.connect(
		// 	'mongodb+srv://vladimir:Ar92664218@cluster0-nkozg.mongodb.net/todos', 
		// 	{
		// 	useNewUrlParser: true,
		// 	useFindAnyModify: false
		// })
		app.listen(PORT, () => {
		console.log('Server has been started...')
		})
	} catch (e) {
		console.log(e)
	}
}

start()  