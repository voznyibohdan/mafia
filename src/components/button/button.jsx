import React from 'react';
import classes from './button.module.scss';

import cn from 'classnames';

const Button = ({ label, onClick, className }) => {
	return (
		<button className={cn(classes.button, className)} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
