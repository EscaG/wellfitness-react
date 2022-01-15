module.exports = class UserDto {
	email;
	id;
	isActivated;
	surname;
	name;
	phone;
	data;

	constructor(model) {
		this.email = model.email;
		this.id = model._id;
		this.isActivated = model.isActivated;
		this.surname = model.surname;
		this.name = model.name;
		this.phone = model.phone;
		this.data = model.data;
	}

}