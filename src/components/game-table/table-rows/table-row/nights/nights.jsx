import React from 'react';
import classes from './nights.module.scss';

import {useSelector} from "react-redux";

const Nights = () => {
	const nights = useSelector((state) => state.nights.nights);

	return (
		<div className={classes.container}>
			{nights.map((night, index) => <div key={night.id} className={classes.night}>{index + 1}</div>)}
		</div>
	);
};

export default Nights;