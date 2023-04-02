import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	isGameStarted: false,
	playersRoles: [],
	nights: [],
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setGameStarted: (state) => {
			state.isGameStarted = true;
		},
		setPlayersRoles: (state, action) => {
			state.playersRoles = action.payload.map((role) => {
				return {
					id: uuidv4(),
					role: role,
					isAlive: true,
				}
			});
		},
		killPlayer: (state, action) => {
			return {
				...state,
				playersRoles: state.playersRoles.map(playerRole => {
					if (playerRole.id === action.payload) {
						return {
							...playerRole,
							isAlive: false
						}
					}

					return playerRole;
				})
			}
		},
		addNight: (state) => {
			state.nights.push(1)
		}
	},
});

export const { setGameStarted, setPlayersRoles, killPlayer } = gameSlice.actions;

export default gameSlice.reducer;
