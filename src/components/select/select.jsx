import React, {useState} from 'react';
import classes from './select.module.scss';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={classes.selectContainer}>
			<div className={classes.select}>
				Вибрати дію

				{isActive ? (
					<KeyboardArrowUpIcon />
				) : (
					<KeyboardArrowDownIcon />
				)}
			</div>


		</div>
	);
};

export default Select;