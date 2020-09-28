import React, { Fragment, useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes/Notes';
import { FireBaseContext } from '../context/firebase/fireBaseContext';

export const Home = () => {
	const { notes, loading, removeNote, fetchNotes } = useContext(
		FireBaseContext
	);

	useEffect(() => {
		fetchNotes();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<Form />

			<hr />

			{loading ? <Loader /> : <Notes notes={notes} handleClick={removeNote} />}
		</Fragment>
	);
};
