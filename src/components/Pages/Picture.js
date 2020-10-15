import React from 'react';
import './Picture.css';

function Picture() {
	return (
		<div id="Top" className="intro">
			<div className="text-container">
				<span className="intro-text">
					A<span style={{ textDecoration: 'underline' }}>modern</span> look with classic design{' '}
				</span>
				<br />
				<span className="intro-text">
					for a smooth seamless<span style={{ textDecoration: 'underline' }}>experience</span>
				</span>
				<br />
				<span className="intro-text">easy to design for easy use.</span>
			</div>
		</div>
	);
}

export default Picture;
