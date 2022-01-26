const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
	brand: String,
	name: String,
	availability: Boolean,
	gallery: [],
	rating: Number,
	slug: String,
	price: {
		fullPrice: String,
		sharePrice: String
	},
	configuration: {
		size: String,
		weight: String,
		color:String,
		frameColor: String,
		upholsteryColor: String
	},
	characteristics:{
		main:{
			name: String,
			list:[] //{id,name, value}
		},
		multimedia: {
			name: String,
			list:[] //{id,name, value}
		},
		additional:{
			name: String,
			list:[] //{id,name, value}
		}
	},
	presentation: [], //{id,name,image,value}
	slider:[]
})

module.exports = mongoose.model("Product", Product);