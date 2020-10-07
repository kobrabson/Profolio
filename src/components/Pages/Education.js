import React from 'react';
import DevImage from './dev-mountain-logo.png';
import LeCordonBleuimage from './leCordonLogo.jpg';
import './Education.css';

function Education() {
	return (
		<div>
			<div className="education-header">Education</div>
			<div className="education-container">
				<div className="card">
					<img src={DevImage} alt="Devmountain" className="dev-img" />
					<p className="education-text school">Devmountain</p>
					<p className="education-text">Web Development Graduate</p>
					<p className="education-text">Lehi, Utah/ remote</p>
				</div>
				<div className="card">
					<img src={LeCordonBleuimage} alt="Devmountain" className="dev-img" />
					<p className="education-text school">Le Cordon Bleu</p>
					<p className="education-text">Culinary Arts Graduate</p>
					<p className="education-text">Austin, Texas</p>
				</div>
			</div>
		</div>
	);
}

export default Education;
