import React from 'react';
import classes from './button.module.scss';

const Button = ({ label, onClick }) => {
	return (
		<button className={classes.button} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
