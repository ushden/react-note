import {
	ADD_NOTE,
	FETCH_NOTES,
	REMOVE_NOTE,
	SHOW_LOADER,
	REMOVE_LOADER,
} from '../types';

const handles = {
	DEFAULT: (state) => state,
	[SHOW_LOADER]: (state) => ({ ...state, loading: true }),
	[ADD_NOTE]: (state, { payload }) => ({
		...state,
		notes: [...state.notes, payload],
	}),
	[REMOVE_NOTE]: (state, { payload }) => ({
		...state,
		notes: state.notes.filter((note) => note.id !== payload),
	}),
	[FETCH_NOTES]: (state, { payload }) => ({
		...state,
		notes: payload,
		loading: false,
	}),
	[REMOVE_LOADER]: (state) => ({ ...state, loading: false }),
};

export const fireBaseReducer = (state, action) => {
	const handle = handles[action.type] || handles['DEFAULT'];
	return handle(state, action);
};
