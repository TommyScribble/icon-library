import React from 'react';

export default function Flag(props) {
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
			<title>flag</title>
			<path
				className="cls-1"
				d="M4,1.5h6a1,1,0,0,1,1,1v2H21c.55,0,.649.281.219.625L14.5,10.5l7.5,6H7.6a.5.5,0,0,1-.464-.688C7.83,14.094,11,13.5,11,13.5H4"
			/>
			<line className="cls-1" x1={11} y1="4.5" x2={11} y2="13.5" />
			<line className="cls-1" x1={2} y1="0.5" x2={2} y2="23.5" />
		</svg>
	);
}
