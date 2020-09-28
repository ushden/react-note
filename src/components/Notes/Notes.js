import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Note } from './Note';

export const Notes = ({ notes, handleClick }) => (
	<TransitionGroup className='list-group anim-opacity' component='ul'>
		{notes.length <= 0
			? 'Заметок нету'
			: notes.map((note) => (
					<CSSTransition timeout={500} classNames={'item'} key={note.id}>
						<Note title={note.title} id={note.id} handleClick={handleClick} />
					</CSSTransition>
			  ))}
	</TransitionGroup>
);
