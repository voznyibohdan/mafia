import React from 'react';
import classes from './table-row.module.scss';

import cn from 'classnames';

import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';
import { killPlayer, giveWarningToPlayer, putPlayerToVoting } from '../../../../store/game.js';

import Nights from './nights/nights.jsx';

const TableRow = ({ player, number }) => {
	const dispatch = useDispatch();

	const handleKillPlayer = () => {
		dispatch(killPlayer(player.id));
	}

	const handleGiveWarningToPlayer = () => {
		dispatch(giveWarningToPlayer(player.id));
	}

	const handlePutPlayerToVoting = () => {
		dispatch(putPlayerToVoting(number));
	}

	return (
		<tr className={cn({
			[classes.red]: player.role === 'Комісар' || player.role === 'Лікар',
			[classes.black]: player.role === 'Мафія' || player.role === 'Дон',
			[classes.dead]: !player.isAlive,
		})}>
			<td
				className={cn(classes.td)}
				onClick={handlePutPlayerToVoting}
			>{number}</td>
			<td className={classes.td}>{player.role}</td>
			<td
				className={cn(classes.td, classes.warningsTd)}
				onClick={handleGiveWarningToPlayer}
			>{player.warnings}</td>
			<td className={cn(classes.td, classes.nightsTd)}>
				<Nights />
			</td>
			<td
				className={cn(classes.td, classes.iconContainer)}
				onClick={handleKillPlayer}
			><CloseIcon fontSize={'large'} /></td>
		</tr>
	);
};

export default TableRow;
