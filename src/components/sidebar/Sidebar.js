import React, { useState, Fragment } from 'react';
import { Link } from 'react-scroll';
import './side.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GoIcons from 'react-icons/go';
import * as GiIcons from 'react-icons/gi';

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
						<Link
							onClick={showSideBar}
							className="nav-text"
							activeClass="active"
							to="About"
							spy={true}
							smooth={true}
							offset={-10}
							duration={500}
						>
							<AiIcons.AiFillHome />
							<span>About</span>
						</Link>

						<Link
							onClick={showSideBar}
							className="nav-text"
							activeClass="active"
							to="Education"
							spy={true}
							smooth={true}
							offset={-10}
							duration={500}
						>
							<GiIcons.GiBookshelf />
							<span>Education</span>
						</Link>

						<Link
							onClick={showSideBar}
							className="nav-text"
							activeClass="active"
							to="Skills"
							spy={true}
							smooth={true}
							offset={-10}
							duration={500}
						>
							<RiIcons.RiKnifeFill />
							<span>Skills</span>
						</Link>

						<a
							onClick={showSideBar}
							className="nav-text"
							target="_blank"
							rel="noopener noreferrer"
							href="https://docs.google.com/document/d/17ljsxTXI4oPlgwg-FeYwj9EMAdVMs0bQj8kK5WYzlTQ/edit#"
						>
							<FaIcons.FaPaperclip />
							<span>Resume</span>
						</a>

						<Link
							onClick={showSideBar}
							className="nav-text"
							activeClass="active"
							to="ContactMe"
							spy={true}
							smooth={true}
							offset={-10}
							duration={500}
						>
							<GoIcons.GoPerson />
							<span>Contact Me</span>
						</Link>

						<Link
							onClick={showSideBar}
							className="nav-text"
							activeClass="active"
							to="Top"
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
						>
							<RiIcons.RiArrowUpCircleFill />
							<span>Back To The Top</span>
						</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default Sidebar;
