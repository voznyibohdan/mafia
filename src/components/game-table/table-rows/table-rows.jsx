import React from 'react';

import { useSelector } from 'react-redux';

import TableRow from './table-row/table-row.jsx';

const TableRows = () => {
	const players = useSelector((state) => state.game.players);

	return (
		<tbody>
		{players.map((player, index) => (
			<TableRow key={player.id} number={index + 1} player={player} />
		))}
		</tbody>
	);
};

export default TableRows;
