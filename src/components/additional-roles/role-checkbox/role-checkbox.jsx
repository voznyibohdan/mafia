import React from 'react';
import classes from './role-checkbox.module.scss';

import { setAdditionalRole, unsetAdditionalRole } from '../../../store/roles.js';
import { useDispatch } from 'react-redux';

const RoleCheckbox = ({ role, disabled }) => {
	const dispatch = useDispatch();

	const handleCheckbox = (e) => {
		if (e.target.checked) {
			dispatch(setAdditionalRole(e.target.value));
		} else {
			dispatch(unsetAdditionalRole(e.target.value));
		}
	}

	return (
		<label className={classes.label}>
			<input value={role} type="checkbox" disabled={disabled} onChange={handleCheckbox}/>
			{role}
		</label>
	);
};

export default RoleCheckbox;
