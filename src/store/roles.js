import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	civilians: [],
	mafias: [],
	roles: [],
}

export const rolesSlice = createSlice({
	name: 'roles',
	initialState,
	reducers: {
		setCivilians: (state, action) => {
			state.civilians = action.payload
		},
		setMafias: (state, action) => {
			state.mafias = action.payload
		},
		setAdditionalRole: (state, action) => {
			state.roles = [...state.roles, action.payload];
		},
		unsetAdditionalRole: (state, action) => {
			state.roles = state.roles.filter(role => role !== action.payload);
		},
	},
})

export const { setCivilians, setMafias, setAdditionalRole, unsetAdditionalRole } = rolesSlice.actions;

export default rolesSlice.reducer;
