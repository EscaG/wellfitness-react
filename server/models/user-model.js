const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true},
	isActivated: {type: Boolean, default: false},
	activationlink: {type: String},
	surname: String,
	name: String,
	phone: String,
	data: {},
	favorites: [],
	basket: [],
	comparison: [],
	avatar: String
})


module.exports = model('User', UserSchema)