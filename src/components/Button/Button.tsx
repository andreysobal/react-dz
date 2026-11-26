import './Button.css';


function Button({children}: {children: string}) {
	return (
		<button className="custom-button text-body-regular text-primary">
			{ children }
		</button>
	);
}

export default Button;