module.exports = class UserDto {
	email;
	id;
	isActivated;
	surname;
	name;
	phone;
	data;
	favorites;
	basket;
	comparison;
	avatar;


	constructor(model) {
		this.email = model.email;
		this.id = model._id;
		this.isActivated = model.isActivated;
		this.surname = model.surname;
		this.name = model.name;
		this.phone = model.phone;
		this.data = model.data;
		this.favorites = model.favorites;
		this.basket = model.basket;
		this.comparison = model.comparison;
		this.avatar = model.avatar;
	}

}