require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const path = require('path');
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
app.use('/api', router);
app.use(errorMiddleware);
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'public')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
	});
}
const DB_URI = "mongodb+srv://fitness:Acorn4ika@wellfitness.skx4x.mongodb.net/WellFitness?retryWrites=true&w=majority";
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

