import React from 'react';
import "./feedback.scss";
import SpriteIcons from '../../../Layout/SpriteIcons/SpriteIcons';
// import { Link } from 'react-router-dom';

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
							<div>1 Отзыв</div>
						</div>
					</div>
				</div>
				<div className="feedback-productcard__box feedback-second">
					<div className='feedback-second__header-name nameheader-feedback'>
						<div className='feedback-productcard__avatar-wrapper'>
							<div className='feedback-productcard__avatar'>
								{/* картинка */}
							</div>
							<div>
								<div className='feedback-productcard__name-client'>Александр Кройц</div>
								<div>
									<span className='feedback-productcard__word-rating'>Оценка</span>
									<span>
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
									</span>
								</div>
							</div>
						</div>
						<div>
							<span>11 декабря 2020 14:15</span>
						</div>
					</div>
					<div className='feedback-productcard__text-feedback'>
						Долго выбирали тренажер для дома, после рекомендации остановились именно на нем. Удобный, устойчивый тренажер, для нас важным моментом было то что его легко перемещать за счет колесиков.
					</div>
				</div>
				<div className="feedback-productcard__box feedback-third">
					<div className='feedback-third__header-name nameheader-feedback'>
						<div className='feedback-productcard__avatar-wrapper'>
							<div className='feedback-productcard__avatar'>
								{/* картинка */}
							</div>
							<div>
								<div className='feedback-productcard__name-client'>Алеся Шмульке</div>
								<div>
									<span className='feedback-productcard__word-rating'>Оценка</span>
									<span>
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
									</span>
								</div>
							</div>
						</div>
						<div>
							<span>28 мая 2021 18:07</span>
						</div>
					</div>
					<div className='feedback-productcard__text-feedback'>
						Долго выбирали тренажер для дома, после рекомендации остановились именно на нем. Удобный, устойчивый тренажер, для нас важным моментом было то что его легко перемещать за счет колесиков.
					</div>
				</div>
			</div>
			{/* <Link to='/' className='article__link feedback-btn'>Все отзывы</Link> */}
		</section>
	);
}
