import React from 'react'

export const TestNoProps = React.memo(() => {
	console.log("Дочерний компонент без пропсов");
	return (
		<div>

		</div>
	)
})
