import React from 'react';
import classes from './table-head.module.scss';
import cn from 'classnames';

import AddIcon from '@mui/icons-material/Add';

import { useDispatch } from 'react-redux';
import { addNight } from '../../../store/nights.js';

const TableHead = () => {
	const dispatch = useDispatch();

	const handleAddNight = () => {
		dispatch(addNight());
	}

	return (
		<thead>
			<tr>
				<th className={classes.th}>Номер</th>
				<th className={classes.th}>Роль</th>
				<th className={classes.th}>Попередження</th>
				<th
					className={cn(classes.th, classes.nightsTh)}
					onClick={handleAddNight}
				>
					<AddIcon fontSize="medium"/>
					<span>Додати ніч</span>
				</th>
				<th className={classes.th}>Вбити</th>
			</tr>
		</thead>
	);
};

export default TableHead;
