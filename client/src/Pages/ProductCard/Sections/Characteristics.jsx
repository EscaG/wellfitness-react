import React, { useEffect, useState } from 'react';
import Accordion from '../../../Components/Layout/Accordion/Accordion';
import "./characteristics.scss";

export default function Characteristics({ product }) {
	const { characteristics } = product;

	const [charMain, setCharMain] = useState(true);
	const [charAdditional, setCharAdditional] = useState(false);
	const [charMultimedia, setCharMultimedia] = useState(false);

	const handleCharMain = () => {
		setCharMain(!charMain)
	}
	const handleCharAdditional = () => {
		setCharAdditional(!charAdditional)
	}
	const handleCharMultimedia = () => {
		setCharMultimedia(!charMultimedia)
	}
	const allCharacteristic = () => {
		if (charMain && charAdditional && charMultimedia) {
			setCharMain(false)
			setCharAdditional(false)
			setCharMultimedia(false)
		} else {
			setCharMain(true)
			setCharAdditional(true)
			setCharMultimedia(true)
		}
	}
	useEffect(() => {

	}, [charAdditional, charMain, charMultimedia]);



	return (
		<section className='page-productcard__characteristics characteristic-productcard' id="characteristic-productcard">

			<div className='characteristic-productcard__title-block char-titleblock'>
				<h4 className='characteristic-productcard__title'>Характеристики</h4>
				<button onClick={allCharacteristic} className='article__link productcard'>
					{(charMain && charAdditional && charMultimedia) ? "Скрыть характеристики" : "Все характеристики"}
				</button>
			</div>
			<div className='characteristic-productcard__all-char char-productcard'>
				<div className='char-productcard__container'>
					<Accordion title={characteristics && characteristics.main.name} isOpen={charMain} handleClick={handleCharMain}>
						<div className={charMain ? "char-productcard__accord active" : "char-productcard__accord"}>
							{characteristics && characteristics.main.list.map(char =>
								<div key={char.id} className='char-productcard__string'>
									<span>{char.name}</span>
									<span>{char.value}</span>
								</div>
							)}
						</div>
					</Accordion>
				</div>
				<div className='char-productcard__container'>
					<Accordion title={characteristics && characteristics.multimedia.name} isOpen={charMultimedia} handleClick={handleCharMultimedia}>
						<div className={charMultimedia ? "char-productcard__accord active" : "char-productcard__accord"}>
							{characteristics && characteristics.multimedia.list.map(char =>
								<div key={char.id} className='char-productcard__string'>
									<span>{char.name}</span>
									<span>{char.value}</span>
								</div>
							)}
						</div>
					</Accordion>
				</div>
				<div className='char-productcard__container'>
					<Accordion title={characteristics && characteristics.additional.name} isOpen={charAdditional} handleClick={handleCharAdditional}>
						<div className={charAdditional ? "char-productcard__accord active" : "char-productcard__accord"}>
							{characteristics && characteristics.additional.list.map(char =>
								<div key={char.id} className='char-productcard__string'>
									<span>{char.name}</span>
									<span>{char.value}</span>
								</div>
							)}
						</div>
					</Accordion>
				</div>

			</div>
		</section>
	);
}
