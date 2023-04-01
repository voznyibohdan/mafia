import React, { useEffect, useState } from 'react';
import classes from './timer.module.scss';
import cn from 'classnames';

import Button from '../button/button.jsx';
import TimerIcons from './timer-icons/timer-icons.jsx';

const Timer = () => {
	const [timerActive, setTimerActive] = useState(false);
	const [seconds, setSeconds] = useState(60);

	useEffect(() => {
		if (!timerActive) return;

		const timeout = setTimeout(() => {
			setSeconds((state) => {
				return --state;
			})
		}, 1000)

		return () => {
			clearTimeout(timeout);
		}
	} ,[seconds, timerActive]);

	const handleStartTimer = () => {
		setTimerActive(!timerActive);
	}

	const handleRestartTimer = () => {
		setTimerActive(false);
		setSeconds(60);
	}

	const handleAddAdditionalTime = () => {
		setSeconds((state) => {
			return state + 30;
		});
	}

	return (
		<div>
			<div className={classes.timerContainer}>
				<Button className={classes.button} label={timerActive ? 'Пауза' : 'Старт'} onClick={handleStartTimer} />
				<div className={cn(classes.timer, {[classes.red]: seconds <= 10})}>{seconds}</div>
				<TimerIcons reloadTimer={handleRestartTimer} addTime={handleAddAdditionalTime} />
			</div>
		</div>
	);
};

export default Timer;
