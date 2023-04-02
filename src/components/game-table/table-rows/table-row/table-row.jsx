import React from 'react';
import classes from './table-row.module.scss';

import cn from 'classnames';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from "react-redux";
import {killPlayer} from "../../../../store/game.js";

const TableRow = ({ playerRole, number }) => {
	const dispatch = useDispatch();

	const handleKillPlayer = (id) => {
		dispatch(killPlayer(id));
	}

	return (
		<tr className={cn({
			[classes.red]: playerRole.role === 'Комісар' || playerRole.role === 'Лікар',
			[classes.black]: playerRole.role === 'Мафія' || playerRole.role === 'Дон',
			[classes.dead]: !playerRole.isAlive,
		})}>
			<td className={cn(classes.td)}>{number}</td>
			<td className={classes.td}>{playerRole.role}</td>
			<td className={classes.td}>select</td>
			<td
				className={cn(classes.td, classes.iconContainer)}
				onClick={() => handleKillPlayer(playerRole.id)}
			><CloseIcon fontSize={'large'} /></td>
		</tr>
	);
};

export default TableRow;
