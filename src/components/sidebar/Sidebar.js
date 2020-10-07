import React, { useState } from 'react';
import './side.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Sidebar = () => {
	const [ sideBar, setSideBar ] = useState(false);

	const showSideBar = () => setSideBar(!sideBar);
	return (
		<div className="navbar">
			<div className="menu-bars">
				<FaIcons.FaBars onClick={showSideBar} />
			</div>
			<nav className={sideBar ? 'nav-menu active' : 'nav-menu'} />
			<ul className="nav-menu-items">
				<li className="nav-toggle">
					<AiIcons.AiOutlineClose />
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
