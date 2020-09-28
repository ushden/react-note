import React from 'react';

export const Note = (props) => (
	<li className='list-group-item note-item'>
		<span> {props.title}</span>
		<button
			type='button'
      id={props.id}
			className='btn btn-danger'
			onClick={() => props.handleClick(props.id)}>
			&times;
		</button>
	</li>
);
