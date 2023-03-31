import React from 'react';

const RolesPreviewList = ({ roles }) => {
	return (
		<>
			{roles.map((role, index) => (
				<div>{index + 1} {role}</div>
			))}
		</>
	);
};

export default RolesPreviewList;
