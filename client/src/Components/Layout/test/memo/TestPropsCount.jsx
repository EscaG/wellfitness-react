import React, { memo } from 'react'

export const TestPropsCount = memo(({ increment }) => {
	console.log("Дочерний компонент с инкрементом");
	return (
		<div>
			<button onClick={increment}>increment</button>
		</div>
	)
})
