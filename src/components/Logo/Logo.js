import React from 'react';
import Tilt from 'react-tilt';
import LogoIcon from './logo.svg';
import './Logo.css';

const Logo = () => {
	return (
		<div style={{ padding: '10px 0 20px 0' }}>
			<Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 150, width: 150, margin: 'auto' }}>
				<div className="Tilt-inner pa3 ">
					<img style={{ paddingTop: '5px' }} src={LogoIcon} alt="logo icon " />
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
