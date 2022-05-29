const Router = require('express')
const router = Router()
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')

router.use('/user', userRouter)
router.use('/news', newsRouter)



// router.use('/', (req, res) => {
// 	res.render('index', {
// 		title: 'Tepli.ru',
// 		isIndex: true
// 	})
// })

// router.get('/about', (req, res) => {
// 	res.render('about', {
// 		title: 'О компании',
// 		isAbout: true
// 	})
// })
// router.get('/news', (req, res) => {
// 	res.render('news', {
// 		title: 'Новости',
// 		isNews: true
// 	})
// })
// router.get('/catalog', (req, res) => {
// 	res.render('catalog', {
// 		title: 'Каталог продукции',
// 		isCatalog: true
// 	})
// })
// router.get('/price', (req, res) => {
// 	res.render('price', {
// 		title: 'Скачать прайс-лист',
// 		isPrice: true
// 	})
// })
// router.get('/contacts', (req, res) => {
// 	res.render('contacts', {
// 		title: 'Контакты',
// 		isContacts: true
// 	})
// })

// router.get('/admin', (req, res) => {
// 	res.render('admin', {
// 		title: 'Админ',
// 		isAdmin: true
// 	})
// })


module.exports = router
