import React, {useState} from 'react';
import classes from './select.module.scss';

import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { removeAvailableAction } from '../../store/nights.js';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select = ({ nightId, selectOptions }) => {
	const dispatch = useDispatch();

	const [isActive, setIsActive] = useState(false);
	const [activeOptions, setActiveOptions] = useState([]);

	const handleOpenCloseSelect = () => {
		setIsActive((state) => !state);
	}

	const handleSelectAction = (action) => {
		setActiveOptions((state) => [...state, action]);
		dispatch(removeAvailableAction({id: nightId, action: action}));
	}

	const renderOptions = (options) => {
		return options.map(option => <div
			key={option}
			className={classes.option}
			onClick={() => handleSelectAction(option)}
		>
			<img
				src={option}
				alt={'action option'}
			/>
		</div>);
	}

	const renderSelectContent = () => {
		if (activeOptions.length) {
			return renderOptions(activeOptions);
		}

		return isActive ? (
			<KeyboardArrowUpIcon />
		) : (
			<KeyboardArrowDownIcon />
		)
	}

	return (
		<div className={classes.selectContainer}>
			<div className={cn(classes.select, {[classes.selected]: activeOptions.length})} onClick={handleOpenCloseSelect}>
				{renderSelectContent()}
			</div>

			{isActive && (
				<div className={classes.optionsContainer}>
					{renderOptions(selectOptions)}
				</div>
			)}
		</div>
	);
};

export default Select;