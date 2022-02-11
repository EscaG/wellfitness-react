const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt')
const uuid = require('uuid');
const mailService = require('../service/mail-service');
const tokenService = require('../service/token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const fileController = require("../controllers/fileController");

class UserService {

	async registration(email, password, surname, name) {
		const candidate = await UserModel.findOne({email});
		if (candidate) {
			throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
		}
		const hashPassword = await bcrypt.hash(password, 3);
		const activationlink = uuid.v4();

		const user = await UserModel.create({email, password: hashPassword, activationlink, surname, name});
		await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationlink}`);

		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto}
	}

	async activate(activationlink) {
		// console.log("activationLink", activationlink)
		const user = await UserModel.findOne({activationlink});
		// console.log("user", user.activationlink);

		if (!user) {
			throw ApiError.BadRequest('Некорректная ссылка активации');
		}
		user.isActivated = true;
		user.save();
	}

	async login(email, password) {
		const user = await UserModel.findOne({email});
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким email не найден');
		}
		const isPassEquals = await bcrypt.compare(password, user.password);
		if (!isPassEquals) {
			throw ApiError.BadRequest('Неверный пароль');
		}
		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({...userDto});

		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return {...tokens, user: userDto}
	}

	async logout(refreshToken) {
		return await tokenService.removeToken(refreshToken);
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError();
		}
		const userData = tokenService.validateRefreshToken(refreshToken);
		const tokenFromDb = await tokenService.findToken(refreshToken);

		// console.log("user = ", userData);
		console.log("refresh = ", refreshToken);
		console.log("tokenFromDb = ", tokenFromDb);

		const user = await UserModel.findById(userData.id);
		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({...userDto});

		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return {...tokens, user: userDto}
	}

	async getAllUsers() {
		const users = await UserModel.find();
		return users;
	}

	async updateUser(email, surname, name, phone, data) {
		await UserModel.updateOne({email}, {surname, name, phone, data});
		return update(email);
	}

	async favoritesService(favorites,email) {
		await UserModel.updateOne({email}, {favorites});
		return update(email);
	}

	async basketService(basket,email) {
		await UserModel.updateOne({email}, {basket});
		return update(email);
	}

	async avatarUpdate(email,avatar){
		const getAvatar = await fileController.moveGallery(avatar, "/storage/users/avatar_");
		await UserModel.updateOne({email}, {avatar:getAvatar});
		return update(email);
	}

}


async function  update(email) {
	const user = await UserModel.findOne({ email });
	if (!user) {
		throw ApiError.BadRequest('Пользователь с таким email не найден');
	}
	const userDto = new UserDto(user);
	const tokens = await tokenService.generateTokens({...userDto});

	await tokenService.saveToken(userDto.id, tokens.refreshToken);
	return {...tokens, user: userDto}
}
module.exports = new UserService();































