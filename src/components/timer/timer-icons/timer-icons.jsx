import React from 'react';
import classes from './timer-icons.module.scss';

import ReplayIcon from '@mui/icons-material/Replay';
import Forward30Icon from '@mui/icons-material/Forward30';

const TimerIcons = ({ reloadTimer, addTime }) => {
	return (
		<div className={classes.container}>
			<div className={classes.icon} onClick={reloadTimer}>
				<ReplayIcon fontSize={'large'} />
			</div>
			<div className={classes.icon} onClick={addTime}>
				<Forward30Icon fontSize={'large'} />
			</div>
		</div>
	);
};

export default TimerIcons;
