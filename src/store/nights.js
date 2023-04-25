import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	nights: [],
}

const actions = [

];

export const nightsSlice = createSlice({
	name: 'nights',
	initialState,
	reducers: {
		addNight: (state) => {
			console.log(state.nights)

			state.nights.push({
				number: 1,
				availableActions: [],
				id: uuidv4(),
			});
		}
	}
});

export const { addNight } = nightsSlice.actions;

export default nightsSlice.reducer;