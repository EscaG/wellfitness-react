import React from 'react';

export default function SpriteIcons({ icon }) {


	switch (icon) {
		case "left":
			return (
				<svg id='left' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
		case "profitable":
			return (
				<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="18.5" cy="18" r="18" fill="#F53B49" />
					<path d="M14.704 16.706C14.248 16.706 13.822 16.634 13.426 16.49C13.042 16.334 12.706 16.13 12.418 15.878C12.13 15.626 11.902 15.326 11.734 14.978C11.578 14.63 11.5 14.258 11.5 13.862C11.5 13.466 11.578 13.094 11.734 12.746C11.902 12.398 12.13 12.098 12.418 11.846C12.706 11.594 13.042 11.396 13.426 11.252C13.822 11.096 14.248 11.018 14.704 11.018C15.148 11.018 15.562 11.096 15.946 11.252C16.342 11.396 16.684 11.594 16.972 11.846C17.26 12.098 17.488 12.398 17.656 12.746C17.824 13.094 17.908 13.466 17.908 13.862C17.908 14.258 17.824 14.63 17.656 14.978C17.488 15.326 17.26 15.626 16.972 15.878C16.684 16.13 16.342 16.334 15.946 16.49C15.562 16.634 15.148 16.706 14.704 16.706ZM14.704 15.086C14.944 15.086 15.148 14.966 15.316 14.726C15.484 14.486 15.568 14.198 15.568 13.862C15.568 13.526 15.484 13.238 15.316 12.998C15.148 12.758 14.944 12.638 14.704 12.638C14.464 12.638 14.26 12.758 14.092 12.998C13.924 13.238 13.84 13.526 13.84 13.862C13.84 14.198 13.924 14.486 14.092 14.726C14.26 14.966 14.464 15.086 14.704 15.086ZM22.426 24.158C21.97 24.158 21.544 24.086 21.148 23.942C20.764 23.786 20.428 23.582 20.14 23.33C19.852 23.078 19.624 22.778 19.456 22.43C19.3 22.082 19.222 21.71 19.222 21.314C19.222 20.918 19.3 20.546 19.456 20.198C19.624 19.85 19.852 19.55 20.14 19.298C20.428 19.046 20.764 18.848 21.148 18.704C21.544 18.548 21.97 18.47 22.426 18.47C22.87 18.47 23.284 18.548 23.668 18.704C24.064 18.848 24.406 19.046 24.694 19.298C24.982 19.55 25.21 19.85 25.378 20.198C25.546 20.546 25.63 20.918 25.63 21.314C25.63 21.71 25.546 22.082 25.378 22.43C25.21 22.778 24.982 23.078 24.694 23.33C24.406 23.582 24.064 23.786 23.668 23.942C23.284 24.086 22.87 24.158 22.426 24.158ZM22.426 22.538C22.666 22.538 22.87 22.418 23.038 22.178C23.206 21.938 23.29 21.65 23.29 21.314C23.29 20.978 23.206 20.69 23.038 20.45C22.87 20.21 22.666 20.09 22.426 20.09C22.186 20.09 21.982 20.21 21.814 20.45C21.646 20.69 21.562 20.978 21.562 21.314C21.562 21.65 21.646 21.938 21.814 22.178C21.982 22.418 22.186 22.538 22.426 22.538ZM13.012 22.808L18.106 17.066L22.624 11L24.118 12.35L19.24 17.912L14.506 24.158L13.012 22.808Z" fill="white" />
				</svg>
			);
		case "recommend":
			return (
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="18" cy="18" r="18" fill="#4B7EE8" />
					<path d="M11.6304 15.5217C10.7317 15.5217 10 16.2535 10 17.1522V22.3696C10 23.2682 10.7317 24 11.6304 24H13.5869C13.9541 24 14.2919 23.8761 14.5652 23.67V15.5217H11.6304Z" fill="white" />
					<path d="M25.6535 17.9674C25.6535 17.5754 25.4983 17.2102 25.229 16.9409C25.5335 16.6076 25.6887 16.1608 25.6463 15.6959C25.57 14.8669 24.8233 14.2174 23.9455 14.2174H19.917C20.1166 13.6115 20.4361 12.5009 20.4361 11.6087C20.4361 10.1941 19.2342 9 18.4796 9C17.802 9 17.3181 9.38152 17.2972 9.39717C17.2203 9.45914 17.1753 9.55305 17.1753 9.65216V11.8637L15.297 15.9326L15.2188 15.9724V22.9624C15.7496 23.2128 16.4213 23.3478 16.8492 23.3478H22.8355C23.5457 23.3478 24.1672 22.8691 24.3133 22.2085C24.3883 21.8687 24.3446 21.5263 24.1953 21.2289C24.6772 20.9863 25.0014 20.49 25.0014 19.9239C25.0014 19.693 24.9485 19.472 24.8481 19.2717C25.3301 19.0291 25.6535 18.5328 25.6535 17.9674Z" fill="white" />
				</svg>
			);
		case "new":
			return (
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="18" cy="18" r="18" fill="#2FC509" />
					<path d="M12.4375 15V23H10.625L7.73438 18.7969H7.6875V23H5.51562V15H7.35938L10.2031 19.1875H10.2656V15H12.4375ZM13.4648 23V15H19.2305V16.75H15.6367V18.125H18.9336V19.875H15.6367V21.25H19.2148V23H13.4648ZM22.3389 23L19.9795 15H22.4014L23.4951 19.9219H23.5576L24.8545 15H26.7607L28.0576 19.9375H28.1201L29.2139 15H31.6357L29.2764 23H27.1982L25.8389 18.5312H25.7764L24.417 23H22.3389Z" fill="white" />
				</svg>
			);
		case "star":
			return (
				<svg id="star" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z" strokeWidth="4" strokeLinejoin="round" />
				</svg>
			)
		case "search":
			return (
				<svg id="search" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M11.4471 17.105C9.54939 17.1046 7.70642 16.4694 6.21158 15.3004L1.51173 20L0 18.4883L4.69984 13.7888C3.53023 12.2938 2.89456 10.4505 2.8941 8.55249C2.8941 3.83686 6.73117 0 11.4471 0C16.1629 0 20 3.83686 20 8.55249C20 13.2681 16.1629 17.105 11.4471 17.105ZM11.4471 2.13812C7.90934 2.13812 5.03234 5.01497 5.03234 8.55249C5.03234 12.09 7.90934 14.9669 11.4471 14.9669C14.9848 14.9669 17.8618 12.09 17.8618 8.55249C17.8618 5.01497 14.9848 2.13812 11.4471 2.13812Z" fill="#858FA4" fillOpacity="0.7" />
				</svg>

			);
		default:
			break;
	}

}
