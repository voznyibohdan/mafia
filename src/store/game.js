import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	isGameStarted: false,
	players: [],
	nights: [],
	votingPlayers: [],
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setGameStarted: (state) => {
			state.isGameStarted = true;
		},
		setPlayersRoles: (state, action) => {
			state.players = action.payload.map((role) => {
				return {
					id: uuidv4(),
					role: role,
					isAlive: true,
					warnings: 0,
				}
			});
		},
		killPlayer: (state, action) => {
			state.players = state.players.map(player => {
				if (player.id === action.payload) {
					return {
						...player,
						isAlive: false
					}
				}

				return player;
			});
		},
		giveWarningToPlayer: (state, action) => {
			state.players = state.players.map(player => {
				if (player.id === action.payload) {
					return {
						...player,
						warnings: player.warnings === 4 ? 0 : player.warnings + 1
					}
				}

				return player;
			});
		},
		addNight: (state) => {
			state.nights.push(1)
		},
		putPlayerToVoting: (state, action) => {
			if (state.votingPlayers.includes(action.payload)) {
				return;
			}

			state.votingPlayers.push(action.payload);
		},
		clearVotingList: (state) => {
			state.votingPlayers = [];
		}
	},
});

export const {
	setGameStarted,
	setPlayersRoles,
	killPlayer,
	giveWarningToPlayer,
	putPlayerToVoting,
	clearVotingList
} = gameSlice.actions;

export default gameSlice.reducer;
