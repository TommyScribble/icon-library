import React from 'react';

const BabyTrolley1 = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			aria-hidden={true}
			focusable={false}
			fill="none"
			stroke="#4d4d4d"
		>
			<defs>
				<style
					dangerouslySetInnerHTML={{
						__html:
							'.a{fill:none;stroke:#4d4d4d;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}',
					}}
				/>
			</defs>
			<title>baby-trolley</title>
			<path
				className="a"
				d="M9.75,12a3.75,3.75,0,0,0-7.5,0L1.5,18.75H3.75l.75,4.5h3l.75-4.5"
			/>
			<circle className="a" cx={6} cy="3.75" r={3} />
			<path className="a" d="M3,3.75S3,7.5.75,7.5" />
			<path className="a" d="M9,3.75S9,7.5,11.25,7.5" />
			<path
				className="a"
				d="M10.5,15.75a.75.75,0,0,1,.75-.75H18V11.312a.749.749,0,0,1,.875-.739A5.25,5.25,0,0,1,18,21H15a4.5,4.5,0,0,1-4.5-4.5Z"
			/>
			<path d="M20.625,21.75a1.125,1.125,0,1,0,1.125,1.125,1.125,1.125,0,0,0-1.125-1.125Z" />
			<path d="M13.125,21.75a1.125,1.125,0,1,0,1.125,1.125,1.125,1.125,0,0,0-1.125-1.125Z" />
		</svg>
	);
};

export default BabyTrolley1;
