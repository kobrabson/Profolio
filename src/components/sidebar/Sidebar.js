import React, { useState, Fragment } from 'react';
import './side.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData';

const Sidebar = () => {
	const [ sideBar, setSideBar ] = useState(false);

	const showSideBar = () => setSideBar(!sideBar);
	return (
		<Fragment>
			<div className="navbar">
				<div className="menu-bars">
					<FaIcons.FaBars onClick={showSideBar} />
				</div>
			</div>
			<nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items" onClick={showSideBar}>
					<li className="nav-toggle">
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<span>{item.icon}</span>
									<span>{item.title}</span>
								</li>
							);
						})}
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default Sidebar;
