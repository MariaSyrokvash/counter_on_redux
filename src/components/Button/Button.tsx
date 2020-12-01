import React from 'react';
import './Button.css';

type ButtonType = {
	title: string
}


const Button = (props: ButtonType) => {
	return (
		<div className="button">
			<button onClick={() => { console.log('btn')} }>{props.title}</button>
		</div>
	);
}

export default Button;
