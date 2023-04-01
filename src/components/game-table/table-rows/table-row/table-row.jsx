import React from 'react';
import classes from './table-row.module.scss';

import cn from 'classnames';

const TableRow = ({ playerRole, number }) => {
	return (
		<tr className={cn({
			[classes.red]: playerRole.role === 'Комісар' || playerRole.role === 'Лікар',
			[classes.black]: playerRole.role === 'Мафія' || playerRole.role === 'Дон',
		})}>
			<td className={cn(classes.td)}>{number}</td>
			<td className={classes.td}>{playerRole.role}</td>
			<td className={classes.td}>select</td>
			<td className={classes.td}>x</td>
		</tr>
	);
};

export default TableRow;
