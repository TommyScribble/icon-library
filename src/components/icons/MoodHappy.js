import React from 'react';

export default function MoodHappy(props) {
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
			<title>mood-happy</title>
			<path
				className="cls-1"
				d="M12.767.5A10.717,10.717,0,0,0,3.652,16.881L.5,23.5l6.619-3.152A10.729,10.729,0,1,0,12.767.5Z"
			/>
			<line className="cls-1" x1="8.75" y1="9.5" x2="8.75" y2="9.5" />
			<path
				className="cls-1"
				d="M8.75,9.5A.25.25,0,1,0,9,9.75a.25.25,0,0,0-.25-.25"
			/>
			<line className="cls-1" x1="16.75" y1="9.5" x2="16.75" y2="9.5" />
			<path
				className="cls-1"
				d="M16.75,9.5a.25.25,0,1,0,.25.25.25.25,0,0,0-.25-.25"
			/>
			<path className="cls-1" d="M15.25,13a2.5,2.5,0,0,1-5,0Z" />
		</svg>
	);
}
