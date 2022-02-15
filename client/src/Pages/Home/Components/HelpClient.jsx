import React from 'react';
import { Link } from 'react-router-dom';
import './helpclient.scss';

export default function HelpClient({ helpHome, arrowlink, phone }) {

	return (
		<section className='section-help__home-page help-home'>

			{helpHome.map((item, index) =>
				<div className='help-home__card' key={index}>
					<div className='help-home__main main-helphome'>

						<svg className={"main-helphome__" + item.imgId} width={item.width} height={item.height}>
							<title>heart</title>
							<use xlinkHref={item.imgSrc + "#" + item.imgId}></use>
						</svg>
						<h3 className='main-helphome__header'>{item.header}</h3>
						<p className='main-helphome__description'>{item.description}</p>
						<div className='main-helphome__link'>
							<Link to="/">{item.link}</Link>
							<svg className='' width="9" height="11">
								<title>heart</title>
								<use xlinkHref={arrowlink + "#arrow-link"}></use>
							</svg>
						</div>
					</div>
					<div className='help-home__hover'><img src={phone} alt="phone" /></div>
				</div>
			)}

		</section>
	);
}
