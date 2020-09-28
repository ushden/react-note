import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	const [open, setOpen] = useState(false);
	console.log(open);

	return (
		<nav className='navbar navbar-dark bg-dark navbar-expand-lg mb-2'>
			<span className='navbar-brand'>React Note</span>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
				onClick={() => open ? setOpen(false) : setOpen(true)}>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id='navbarNav'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<NavLink className='nav-link' exact to={'/'} onClick={() => setOpen(false)}>
							Главная
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' to={'/about'} onClick={() => setOpen(false)}>
							Информация
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
