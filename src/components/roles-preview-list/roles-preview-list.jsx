import React from 'react';

const RolesPreviewList = ({ roles }) => {
	return (
		<>
			{roles.map((role, index) => (
				<div key={index}>{index + 1} {role}</div>
			))}
		</>
	);
};

export default RolesPreviewList;
