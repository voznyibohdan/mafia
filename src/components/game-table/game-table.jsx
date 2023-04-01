import React from 'react';
import classes from './game-table.module.scss';

import { useSelector } from 'react-redux';

import TableHead from './table-head/table-head.jsx';
import TableRows from './table-rows/table-rows.jsx';

const GameTable = () => {
	const { nights, playersRoles } = useSelector((state) => state.game);

	return (
		<table className={classes.table}>
			<TableHead />
			<TableRows />
		</table>
	);
};

export default GameTable;
