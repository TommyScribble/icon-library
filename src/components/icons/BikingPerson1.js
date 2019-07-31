import React from 'react';

const BikingPerson1 = props => {
	return (
		<svg
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
							'.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}',
					}}
				/>
			</defs>
			<title>biking-person</title>
			<circle className="a" cx="14.999" cy="3.75" r="2.25" />
			<circle className="a" cx="4.499" cy="18.75" r="3.75" />
			<circle className="a" cx="19.499" cy="18.75" r="3.75" />
			<path
				className="a"
				d="M12,20.25a1.5,1.5,0,0,1-1.5-1.5,5.985,5.985,0,0,0-3.236-5.328,1.5,1.5,0,0,1-.339-2.417l4.042-3.842a1.5,1.5,0,0,1,2.375.416c.007.013,1.146,2.171,3.158,2.171a1.5,1.5,0,0,1,0,3,6.322,6.322,0,0,1-4.709-2.231L10.338,11.9A8.97,8.97,0,0,1,13.5,18.75,1.5,1.5,0,0,1,12,20.25Z"
			/>
		</svg>
	);
};

export default BikingPerson1;