import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FireBaseContext } from '../context/firebase/fireBaseContext';

export const Form = () => {
	const [value, setValue] = useState('');
	const { show, hide } = useContext(AlertContext);
	const { addNote } = useContext(FireBaseContext);

	const alertSuccess = 'success';
	const successText = `Заметка "${value}" успешно добавлена! Красава!`;
	const failText = 'Введите название заметки, плз';

	const handleSubmit = (event) => {
		event.preventDefault();

		if (value.trim()) {
			addNote(value.trim())
				.then(() => show(successText, alertSuccess))
				.catch((e) => show(e.message));
		} else {
			show(failText);
		}
		setValue('');

		setTimeout(hide, 6000);
	};

	return (
		<form className='mt-2' onSubmit={handleSubmit}>
			<div className='form-group'>
				<input
					type='text'
					className='form-control mb-2'
					aria-describedby='emailHelp'
					placeholder='Введите вашу заметку'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
        <button type="submit" className="btn btn-success">Добавить</button>
			</div>
		</form>
	);
};
