import React from 'react';

const BikingPerson2 = props => {
	return (
		<svg
			id="Light"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			{...props}
		>
			<defs>
				<style
					dangerouslySetInnerHTML={{
						__html:
							'.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}',
					}}
				/>
			</defs>
			<title>biking-person</title>
			<circle className="cls-1" cx="15.5" cy="3.75" r="2.5" />
			<path
				className="cls-1"
				d="M12,21a1.46,1.46,0,0,1-.326-.036,1.5,1.5,0,0,1-1.139-1.789,5.262,5.262,0,0,0-2.2-5.484l-.664-.443a1.5,1.5,0,0,1-.3-2.236l3.5-4a1.5,1.5,0,0,1,2.3.051A5.134,5.134,0,0,0,17.2,9h.3a1.5,1.5,0,0,1,0,3h-.3a8.12,8.12,0,0,1-5.126-1.808l-1.353,1.547a8.288,8.288,0,0,1,2.742,8.086A1.5,1.5,0,0,1,12,21Z"
			/>
			<circle className="cls-1" cx="4.5" cy="18.75" r={4} />
			<circle className="cls-1" cx="19.5" cy="18.75" r={4} />
		</svg>
	);
};

export default BikingPerson2;
