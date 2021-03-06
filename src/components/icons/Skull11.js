import React from 'react';

export default function Skull11(props) {
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
			<title>skull-1</title>
			<path
				className="a"
				d="M21.749,10.5a9.75,9.75,0,1,0-16.5,7.025V21a2.25,2.25,0,0,0,4.5,0,2.25,2.25,0,0,0,4.5,0,2.25,2.25,0,0,0,4.5,0V17.525A9.712,9.712,0,0,0,21.749,10.5Z"
			/>
			<circle className="a" cx="7.499" cy="10.5" r="2.25" />
			<circle className="a" cx="16.499" cy="10.5" r="2.25" />
			<line className="a" x1="11.999" y1={15} x2="11.999" y2="17.25" />
		</svg>
	);
}
