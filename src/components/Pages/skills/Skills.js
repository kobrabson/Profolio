import React from 'react';
import reactImage from './1280px-React-icon.svg.png';
import javascriptImage from './javascript-logo-.png';
import html5Image from './HTML5.png';
import cssImage from './css-3-logo.png';
import bootstrapImage from './bootstrap.png';
import nodeImage from './Node.js_logo.png';
import PostgreSQL from './postgresql-logo.png';
import MySQL from './mySQL.png';
import restfulApi from './RESTAPI.png';
import mongoDB from './mongoDB.png';
import './Skill.css';

function Skills() {
	return (
		<div id="Skills">
			<div className="headers">Skills</div>
			<div className="skills-container">
				<div className="skill-container-frontend card">
					<p className="skill-title">Frontend</p>
					<div className="logo-container">
						<img className="logos" src={reactImage} alt="react logo" /> <p className="logo-title">React</p>
					</div>
					<div className="logo-container">
						<img className="logos java" src={javascriptImage} alt="javascript logo" />{' '}
						<p className="logo-title ">Javascript</p>
					</div>
					<div className="logo-container">
						<img className="logos" src={html5Image} alt="html5 logo" />{' '}
						<p className="logo-title">Javascript</p>
					</div>
					<div className="logo-container">
						<img className="logos" src={cssImage} alt="CSS logo" /> <p className="logo-title">CSS</p>
					</div>
					<div className="logo-container">
						<img className="logos" src={bootstrapImage} alt="Bootstrap logo" />{' '}
						<p className="logo-title">Bootstrap</p>
					</div>
				</div>
				<div className="skill-container-backend card">
					<div className="logo-container">
						<img className="logos" src={nodeImage} alt="Node.js Logo" />{' '}
						<p className="logo-title">Node.js</p>
					</div>
					<div className="logo-container">
						<img className="logos" src={PostgreSQL} alt="PostgreSQL Logo" />{' '}
						<p className="logo-title">PostgreSQL</p>
					</div>
					<div className="logo-container">
						<img className="logos" src={MySQL} alt="MySQL Logo" /> <p className="logo-title">MySQL</p>
					</div>
					<div className="logo-container">
						<img className="logos" src={restfulApi} alt="RESTFUL API Logo" />{' '}
						<p className="logo-title">REST API</p>
					</div>
					<div className="logo-container">
						<img className="logos" src={mongoDB} alt="MongoDB Logo" /> <p className="logo-title">MongoDB</p>
					</div>
					<p className="skill-title">Backend</p>
				</div>
			</div>
		</div>
	);
}

export default Skills;
