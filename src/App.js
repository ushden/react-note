import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Alert } from './components/Alert/Alert';
import { NavBar } from './components/NavBar';
import { AlertState } from './context/alert/AlertState';
import { FireBaseState } from './context/firebase/FireBaseState';
import { About } from './pages/About';
import { Home } from './pages/Home';

const App = () => {
	return (
		<AlertState>
			<FireBaseState>
				<BrowserRouter>
					<Fragment>
						<NavBar />
						<div className='container'>
							<Alert />
							<Route path={'/'} exact render={() => <Home />} />
							<Route path={'/about'} render={() => <About />} />
						</div>
					</Fragment>
				</BrowserRouter>
			</FireBaseState>
		</AlertState>
	);
};

export default App;
