import React from 'react';

export default function WenchDouble1(props) {
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
			<title>wench-double</title>
			<path
				className="a"
				d="M9.4,16.741,16.74,9.4a4.55,4.55,0,0,0,6.066-6.066L21.381,4.762a1.516,1.516,0,1,1-2.144-2.144l1.424-1.425A4.55,4.55,0,0,0,14.6,7.259L7.258,14.6a4.55,4.55,0,0,0-6.066,6.066l1.425-1.424a1.516,1.516,0,0,1,2.145,2.144L3.337,22.807A4.55,4.55,0,0,0,9.4,16.741Z"
			/>
			<path
				className="a"
				d="M7.789,9.934,7.258,9.4A4.55,4.55,0,0,1,1.192,3.338L2.617,4.762A1.516,1.516,0,1,0,4.762,2.618L3.337,1.193A4.55,4.55,0,0,1,9.4,7.259l.452.452"
			/>
			<path
				className="a"
				d="M16.111,13.967l.629.629a4.55,4.55,0,0,1,6.066,6.066l-1.425-1.424a1.516,1.516,0,0,0-2.144,2.144l1.424,1.425A4.55,4.55,0,0,1,14.6,16.741l-.629-.63"
			/>
		</svg>
	);
}
