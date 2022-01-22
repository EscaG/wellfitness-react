import React, { memo } from 'react';

export const TestProps = memo(({ list }) => {
	console.log("Дочерний компонент MAP list");
	return (
		<div>
			{list.map(item =>
				<div key={item}>{item}</div>
			)}
		</div>
	)
})
