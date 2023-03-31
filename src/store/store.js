import { configureStore } from '@reduxjs/toolkit'

import rolesReducer from './roles.js';
import gameReducer from './game.js';

export const store = configureStore({
	reducer: {
		roles: rolesReducer,
		game: gameReducer,
	},
})
