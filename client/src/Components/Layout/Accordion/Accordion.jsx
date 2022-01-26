/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import './accordion.css';
import arrow from './arrow.png';

export default function Accordion({ title, isOpen, handleClick, children }) {
	return (
		<div className="accordion">
			<div className="accordion-title" onClick={() => handleClick(!isOpen)}>
				<h4>{title}</h4>
				<img className='toggle' src={arrow} aria-expanded={isOpen} alt='Toggle Accordion' />
			</div>
			<div className="accordion-content" aria-expanded={!isOpen}>
				{children}
			</div>
		</div>
	);
}
