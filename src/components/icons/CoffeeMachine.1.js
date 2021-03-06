import React from 'react';

export default function CoffeeMachine1(props) {
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
			<title>coffee-machine</title>
			<polyline
				className="cls-1"
				points="21.5 14.5 21.5 19.5 2.5 19.5 2.5 6.5"
			/>
			<line className="cls-1" x1="21.5" y1="6.5" x2="21.5" y2="8.5" />
			<circle className="cls-1" cx={12} cy="5.5" r="1.5" />
			<path className="cls-1" d="M4.5,2.5a1,1,0,1,1-1,1,1,1,0,0,1,1-1" />
			<path
				className="cls-1"
				d="M22.5.5H1.5a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H6c2.5,0,1.5,3,4,3h4c2.5,0,1.5-3,4-3h4.5a1,1,0,0,0,1-1v-4A1,1,0,0,0,22.5.5Z"
			/>
			<path
				className="cls-1"
				d="M17.75,3a.25.25,0,1,1-.25.25A.25.25,0,0,1,17.75,3"
			/>
			<path
				className="cls-1"
				d="M20.25,3a.25.25,0,1,1-.25.25A.25.25,0,0,1,20.25,3"
			/>
			<rect
				className="cls-1"
				x="0.5"
				y="19.5"
				width={23}
				height={4}
				rx={1}
				ry={1}
			/>
			<path className="cls-1" d="M15.5,16a3.5,3.5,0,0,1-7,0v-.5h7Z" />
			<path
				className="cls-1"
				d="M14,9.5H10V12a.5.5,0,0,0,.5.5h3A.5.5,0,0,0,14,12Z"
			/>
			<line className="cls-1" x1={12} y1="12.5" x2={12} y2="13.5" />
			<line className="cls-1" x1={14} y1="11.5" x2="18.5" y2="11.5" />
			<path
				className="cls-1"
				d="M23.5,11.5a1,1,0,0,1-1,1H19a.5.5,0,0,1-.5-.5V11a.5.5,0,0,1,.5-.5h3.5A1,1,0,0,1,23.5,11.5Z"
			/>
			<path className="cls-1" d="M15.5,15.5h1.25a1.25,1.25,0,0,1,0,2.5" />
		</svg>
	);
}
