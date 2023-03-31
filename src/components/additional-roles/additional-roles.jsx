import React from 'react';
import classes from './additional-roles.module.scss';

import RoleCheckbox from './role-checkbox/role-checkbox.jsx';

const AdditionalRoles = ({ disabled }) => {
	const additionalRoles = ['Комісар', 'Дон', 'Лікар'];

	return (
		<div className={classes.container}>
			{additionalRoles.map((role, index) => (
				<RoleCheckbox key={index} role={role} disabled={disabled} />
			))}
		</div>
	);
};

export default AdditionalRoles;
