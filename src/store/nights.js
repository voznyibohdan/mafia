import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	nights: [],
}

export const nightsSlice = createSlice({
	name: 'nights',
	initialState,
	reducers: {
		addNight: (state) => {
			state.nights.push({
				number: 1,
				availableActions: [
					'../../public/action-icons/knife.svg',
					'../../public/action-icons/hat.svg',
					'../../public/action-icons/police.svg',
					'../../public/action-icons/pill.svg',
				],
				id: uuidv4(),
			});
		},
		removeAvailableAction: (state, action) => {
			state.nights.map(night => {
				if (night.id === action.payload.id) {
					night.availableActions = night.availableActions
						.filter((availableAction) => availableAction !== action.payload.action);
				}
			});
		}
	}
});

export const { addNight, removeAvailableAction } = nightsSlice.actions;

export default nightsSlice.reducer;