const express = require('express')
const pool = require("./db")
const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/mainroute')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})

app.post("/1", async(req, res) =>{
	try {
		console.log(req.body);
	} catch (error) {
		console.log(error.massage);
	}
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