import './Button.css';
import React from 'react';


function Button(): React.JSX.Element {
	const text = 'Искать';

	return (
		<button className="custom-button text-body-regular text-primary">
			{ text }
		</button>
	);
}

export default Button;