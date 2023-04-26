import React from 'react';
import classes from './nights.module.scss';

import Select from '../../../../select/select.jsx';

import { useSelector } from 'react-redux';

const Nights = () => {
	const nights = useSelector((state) => state.nights.nights);

	return (
		<div className={classes.container}>
			{nights.map((night) => <div key={night.id} className={classes.night}>
				<Select
					nightId={night.id}
					selectOptions={night.availableActions}
				/>
			</div>)}
		</div>
	);
};

export default Nights;