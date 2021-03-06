import React from 'react';

export default function LoveBoat2(props) {
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
			<title>love-boat</title>
			<path
				className="cls-1"
				d="M18.758,4.614a1.569,1.569,0,0,0-2.895-1.209c-.674,1.152.164,3.608.552,4.605a.492.492,0,0,0,.533.312c1.059-.151,3.61-.625,4.284-1.777A1.57,1.57,0,0,0,18.758,4.614Z"
			/>
			<path
				className="cls-1"
				d="M9.734,2.815A1.569,1.569,0,0,0,7.568,5.084c.834,1.042,3.426,1.141,4.5,1.136a.493.493,0,0,0,.482-.386c.24-1.043.711-3.594-.123-4.636A1.57,1.57,0,0,0,9.734,2.815Z"
			/>
			<line className="cls-1" x1="0.5" y1="23.5" x2="0.5" y2="11.5" />
			<line className="cls-1" x1="23.5" y1="23.5" x2="23.5" y2={17} />
			<rect className="cls-1" x="0.5" y="18.5" width={23} height={3} />
			<circle className="cls-1" cx="4.5" cy="14.5" r={2} />
			<circle className="cls-1" cx={8} cy="9.5" r="1.5" />
			<path
				className="cls-1"
				d="M10,12.5h5.5a6,6,0,0,1,6,6v0a0,0,0,0,1,0,0H9.5a0,0,0,0,1,0,0V13a.5.5,0,0,1,.5-.5Z"
			/>
		</svg>
	);
}
