import React from 'react';
import './Picture.css';

function Picture() {
	return (
		<div className="intro">
			<div className="text-container">
				<span className="intro-text">
					{' '}
					A <spam style={{ textDecoration: 'underline' }}>modern</spam> look with classic design{' '}
				</span>
				<br />
				<span className="intro-text">
					for a smooth seemless<span style={{ textDecoration: 'underline' }}>experience</span>
				</span>
				<br />
				<span className="intro-text">easy to design for easy use.</span>
			</div>
		</div>
	);
}

export default Picture;
