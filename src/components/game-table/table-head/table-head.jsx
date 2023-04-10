import React from 'react';
import classes from './table-head.module.scss';
import cn from 'classnames';

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th className={classes.th}>Номер</th>
				<th className={classes.th}>Роль</th>
				<th className={classes.th}>Попередження</th>
				<th className={cn(classes.th, classes.nightsTh)}>

				</th>
				<th className={classes.th}>Вбити</th>
			</tr>
		</thead>
	);
};

export default TableHead;
