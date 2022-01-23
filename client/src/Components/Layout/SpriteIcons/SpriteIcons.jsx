import React from 'react';

export default function SpriteIcons({ icon }) {


	switch (icon) {
		case "left":

			return (
				<svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14 6.5H1M1 6.5L6.42466 1M1 6.5L6.42466 12" stroke="#F53B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			);
		case "favorite":
			return (
				<svg id="favorites" viewBox="0 0 24 21" xmlns="http://www.w3.org/2000/svg">
					<g opacity="0.7">
						<path d="M22.0718 2.95445C19.4616 0.344964 15.2154 0.344964 12.6059 2.95445L11.9998 3.5602L11.394 2.95445C8.78455 0.344611 4.53796 0.344611 1.92847 2.95445C-0.628032 5.51095 -0.644633 9.56328 1.88997 12.3808C4.2017 14.9497 11.0196 20.4996 11.3089 20.7345C11.5053 20.8941 11.7416 20.9718 11.9765 20.9718C11.9842 20.9718 11.992 20.9718 11.9994 20.9715C12.2424 20.9828 12.4872 20.8994 12.6899 20.7345C12.9792 20.4996 19.7979 14.9497 22.1103 12.3804C24.6445 9.56328 24.6279 5.51095 22.0718 2.95445ZM20.535 10.963C18.7326 12.9654 13.7782 17.095 11.9994 18.5605C10.2207 17.0954 5.26732 12.9661 3.46527 10.9634C1.69712 8.99815 1.68052 6.19935 3.42677 4.4531C4.31861 3.56161 5.48984 3.11551 6.66107 3.11551C7.8323 3.11551 9.00354 3.56126 9.89538 4.4531L11.2277 5.78539C11.3863 5.94398 11.5862 6.03864 11.796 6.07184C12.1365 6.14496 12.5059 6.04994 12.7708 5.78574L14.1038 4.4531C15.8879 2.66976 18.7898 2.67012 20.5728 4.4531C22.319 6.19935 22.3024 8.99815 20.535 10.963Z" />
					</g>
				</svg>
			)
		case "comparison":
			return (
				<svg id="comparison" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
					<g opacity="0.7" >
						<rect y="7.49414" width="2" height="10" rx="1" />
						<rect x="5" y="0.494141" width="2" height="17" rx="1" />
						<rect x="10" y="7.49414" width="2" height="10" rx="1" />
						<rect x="15" y="4.49414" width="2" height="13" rx="1" />
					</g>
				</svg>

			)

		default:
			break;
	}
	// return (
	// 	<div>

	// 	</div>
	// )
}
