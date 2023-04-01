import React from 'react';

import { useSelector } from 'react-redux';

import TableRow from './table-row/table-row.jsx';

const TableRows = () => {
	const roles = useSelector((state) => state.game.playersRoles);

	return (
		<tbody>
		{roles.map((playerRole, index) => (
			<TableRow key={playerRole.id} number={index + 1} playerRole={playerRole} />
		))}
		</tbody>
	);
};

export default TableRows;
