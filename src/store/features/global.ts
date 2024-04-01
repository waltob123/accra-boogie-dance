import { auditionDetailschema, primaryContactSchema } from '@/utils/schema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { z } from 'zod';

const initialState = {
	auditionDetails: {} as z.infer<typeof auditionDetailschema>,
	primaryContact: {} as z.infer<typeof primaryContactSchema>,
};

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		updateGlobalState: (
			state,
			action: PayloadAction<Partial<typeof initialState>>,
		) => {
			return {
				...state,
				...action.payload,
			};
		},

		resetGlobal: () => {
			return initialState;
		},
	},
});

export const { resetGlobal, updateGlobalState } = globalSlice.actions;

export default globalSlice;
