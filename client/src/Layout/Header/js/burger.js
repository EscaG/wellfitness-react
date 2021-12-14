/** 
 * Открываю и закрываю меню
 */
export function openMenu() {

	// document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('.menu-icon').onclick = () => {
		document.querySelector('.menu-icon').classList.toggle('_active');
		document.querySelector('.adaptive-menu__content').classList.toggle('_active');
		document.querySelector('.adaptive-menu').classList.toggle('_active');
		// document.getElementsByTagName("body")[0].classList.toggle("lock");
		document.body.classList.toggle("lock");
		// возвращаю содержимое бургер меню в исходноеположение
		document.querySelector(".adaptive-menu__login").classList.remove("_disactive");
		document.querySelector(".adaptive-menu__main-menu").classList.remove("_disactive");
		document.querySelector(".catalog-header__item_catalog").classList.remove("_disactive");
		document.querySelector(".menu__body").classList.remove("_disactive");
		document.querySelector(".sub_home").classList.remove("_active");
		document.querySelector(".sub_club").classList.remove("_active");
		document.querySelector(".contacts-header__border ").classList.remove("_active");
	}
	// });
}
/**
 * Для сворачивания меню по щелчку в пустом месте
document.querySelector('.adaptive-menu__content').onclick = () => {
	document.querySelector('.menu-icon').classList.remove('_active');
	document.querySelector('.adaptive-menu__content').classList.remove('_active');
	document.querySelector("body").classList.remove("lock");
}
*/
export function adaptiveMenuCatalogHome() {
	document.querySelector(".adaptive-menu__login").classList.add("_disactive");
	document.querySelector(".adaptive-menu__main-menu").classList.add("_disactive");
	document.querySelector(".catalog-header__item_catalog").classList.add("_disactive");
	document.querySelector(".menu__body").classList.add("_disactive");
	document.querySelector(".sub_home").classList.add("_active");
	document.querySelector(".contacts-header__border ").classList.add("_active");
}
export function adaptiveMenuCatalogClub() {
	document.querySelector(".adaptive-menu__login").classList.add("_disactive");
	document.querySelector(".adaptive-menu__main-menu").classList.add("_disactive");
	document.querySelector(".catalog-header__item_catalog").classList.add("_disactive");
	document.querySelector(".menu__body").classList.add("_disactive");
	document.querySelector(".sub_club").classList.add("_active");
	document.querySelector(".contacts-header__border ").classList.add("_active");
}
export function adaptiveMenuCatalogBack() {
	document.querySelector(".adaptive-menu__login").classList.remove("_disactive");
	document.querySelector(".adaptive-menu__main-menu").classList.remove("_disactive");
	document.querySelector(".catalog-header__item_catalog").classList.remove("_disactive");
	document.querySelector(".menu__body").classList.remove("_disactive");
	document.querySelector(".sub_home").classList.remove("_active");
	document.querySelector(".sub_club").classList.remove("_active");
	document.querySelector(".contacts-header__border ").classList.remove("_active");
}