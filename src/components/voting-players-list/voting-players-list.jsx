import React from 'react';
import classes from './voting-players-list.module.scss';

import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux';
import { clearVotingList } from '../../store/game.js';

const VotingPlayersList = () => {
	const votingPlayers = useSelector((state) => state.game.votingPlayers);
	const dispatch = useDispatch();

	const handleClear = () => {
		dispatch(clearVotingList());
	}

	return (
		<div className={classes.container}>
			Гравці виставлені на голосування:

			{votingPlayers?.map(playerNumber => (
				<span key={playerNumber} className={classes.playerNumber}>{playerNumber}</span>
			))}

			{!!votingPlayers.length && <CloseIcon fontSize={'large'} className={classes.clear} onClick={handleClear} />}
		</div>
	);
};

export default VotingPlayersList;