import React, { useContext, useReducer } from 'react';
import { FireBaseContext } from './fireBaseContext';
import axios from 'axios';
import {
	ADD_NOTE,
	FETCH_NOTES,
	REMOVE_LOADER,
	REMOVE_NOTE,
	SHOW_LOADER,
} from '../types';
import { fireBaseReducer } from './fireBaseReducer';
import { AlertContext } from '../alert/alertContext';

export const FireBaseState = ({ children }) => {
	const url =
		process.env.REACT_APP_DB_URL || 'https://react-note-248d3.firebaseio.com';

	const initialState = {
		notes: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(fireBaseReducer, initialState);
	const { show, hide } = useContext(AlertContext);

	const showLoader = () => dispatch({ type: SHOW_LOADER });

	const fetchNotes = async () => {
		try {
			showLoader();
			const response = await axios.get(`${url}/notes.json`);

			const payload = Object.keys(response.data).map((key) => {
				return {
					...response.data[key],
					id: key,
				};
			});

			dispatch({ type: FETCH_NOTES, payload });
		} catch (e) {
			console.log('Нету заметок на сервере');
			removeLoading();
		}
	};

	// addNote
	const addNote = async (title) => {
		try {
			const note = {
				title,
				time: new Date().toJSON(),
			};

			const response = await axios.post(`${url}/notes.json`, note);
			const payload = {
				...note,
				id: response.data.name,
			};

			dispatch({ type: ADD_NOTE, payload });
		} catch (e) {
			throw new Error(e.message);
		}
	};

	// removeNote
	const removeNote = async (id) => {
		await axios.delete(`${url}/notes/${id}.json`);

		dispatch({ type: REMOVE_NOTE, payload: id });

    show('Заметка успешно удалена!');
    
    setTimeout(hide, 4000);
	};

	const removeLoading = () => dispatch({ type: REMOVE_LOADER });

	return (
		<FireBaseContext.Provider
			value={{
				showLoader,
				fetchNotes,
				addNote,
				removeNote,
				removeLoading,
				notes: state.notes,
				loading: state.loading,
			}}>
			{children}
		</FireBaseContext.Provider>
	);
};
