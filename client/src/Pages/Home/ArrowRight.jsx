import React from 'react'

export default function ArrowRight(className, style, onClick) {
	return (
		<div
			className={className}
			onClick={onClick}
			style={{
				...style,
				background: "#fff",
				width: "50px",
				height: "50px",
				borderRadius: "50%",
				border: "1px solid #000"
			}}
		>

		</div>
	)
}
