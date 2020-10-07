import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
	return (
		<div className="App">
			<div className="navbar">
				<div className="menu-bars">
					<Sidebar />
				</div>
			</div>
		</div>
	);
};

export default App;
