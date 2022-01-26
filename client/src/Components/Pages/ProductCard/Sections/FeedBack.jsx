import React from 'react';
import "./feedback.scss";
import SpriteIcons from '../../../Layout/SpriteIcons/SpriteIcons';
import { Link } from 'react-router-dom';

export default function FeedBack() {
	return (
		<section className='page-productcard__feedback feedback-productcard' id='feedback-produc'>
			<h3 className='feedback-productcard__title'>Отзывы</h3>
			<div className="feedback-productcard__wrapper">
				<div className="feedback-productcard__box feedback-first">
					<div className='feedback-first__wrapper'>
						{/* //! Блок с общей оценкой*/}
						<div className="">
							<div className='feedback-first__rating'>
								<h4>4,5</h4>
								<div>
									<svg width="12" height="12" className='feedback-staricon full'>
										<SpriteIcons icon="star" />
									</svg>
									<svg width="12" height="12" className='feedback-staricon full'>
										<SpriteIcons icon="star" />
									</svg>
									<svg width="12" height="12" className='feedback-staricon full'>
										<SpriteIcons icon="star" />
									</svg>
									<svg width="12" height="12" className='feedback-staricon full'>
										<SpriteIcons icon="star" />
									</svg>
									<svg width="12" height="12" className='feedback-staricon '>
										<SpriteIcons icon="star" />
									</svg>
								</div>
							</div>
							<div className='feedback-first__more'>
								100500 отзывов
							</div>
						</div>
						{/* //! Блок с таблицей рейтингов */}
						<div className="feedback-first__entity">
							<div>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
							</div>
							<div>23 Отзывов</div>
							<div>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
							</div>
							<div>5 Отзывов</div>
							<div>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
							</div>
							<div>17 Отзывов</div>
							<div>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
							</div>
							<div>8 Отзывов</div>
							<div>
								<svg width="12" height="12" className='feedback-staricon full'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
								<svg width="12" height="12" className='feedback-staricon'>
									<SpriteIcons icon="star" />
								</svg>
							</div>
							<div>10 Отзывов</div>
						</div>
					</div>
				</div>
				<div className="feedback-productcard__box feedback-second">
				</div>
				<div className="feedback-productcard__box feedback-third">
				</div>
			</div>
			{/* <Link to='/' className='article__link feedback-btn'>Все отзывы</Link> */}
		</section>
	);
}
