import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	isGameStarted: false,
	playersRoles: [],
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setGameStarted: (state) => {
			state.isGameStarted = true;
		},
		setPlayersRoles: (state, action) => {
			state.playersRoles = [...action.payload];
		},
	},
});

export const { setGameStarted, setPlayersRoles } = gameSlice.actions;

export default gameSlice.reducer;
