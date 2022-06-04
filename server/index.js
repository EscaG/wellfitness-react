require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRouter = require('./router/auth.routes');
const productRouterFood = require('./router/productRout');
const productRouter = require('./router/product.routes');
const fileRouter = require('./router/file.routes');
const telegramRouter = require('./router/telegram.routes');
const path = require('path');
const multer = require('multer');
// var logger = require('morgan');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();
// app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
	credentials: true,
	origin: process.env.CLIENT_URL
}));
app.use(express.static("public"));
app.use(multer({ dest: "public/upload" }).single("fileData"));
// роутинг
app.use('/api', authRouter);
app.use('/api', productRouter);
app.use('/api', productRouterFood);
app.use('/api', fileRouter);
app.use('/api', telegramRouter);
app.use(errorMiddleware);
// выгрузка index.html для всех запросов на хосте
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'public')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
	});
}

const DB_URI = process.env.DB_URI;
const start = async () => {
	try {
		await mongoose.connect(DB_URI, {
			useNewUrlParser: true, useUnifiedTopology: true
		})
		app.listen(PORT, () => {
			console.log('http://localhost:' + PORT);
		})
	} catch (e) {
		console.log(e);
	}
}

start();

