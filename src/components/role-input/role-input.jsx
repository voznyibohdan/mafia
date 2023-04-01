import React from 'react';
import classes from './role.input.module.scss';

import { setCivilians, setMafias } from '../../store/roles.js';
import { useDispatch } from 'react-redux';

const RoleInput = ({ label, disabled }) => {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		if (label === 'Мафія') {
			dispatch(setMafias(Array.from({length: e.target.value}, () => 'Мафія')));
		}

		if (label === 'Мирні жителі') {
			dispatch(setCivilians(Array.from({length: e.target.value}, () => 'Мирний житель')));
		}
	}

	return (
		<label className={classes.label}>
			{label}
			<input disabled={disabled} type="number" onChange={handleChange}/>
		</label>
	);
};

export default RoleInput;
