import React from 'react';

export default function CoffeeMachine2(props) {
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
			<title>coffee-machine</title>
			<path
				className="a"
				d="M22.5,21.75a1.5,1.5,0,0,0-1.5-1.5H3a1.5,1.5,0,1,0,0,3H21A1.5,1.5,0,0,0,22.5,21.75Z"
			/>
			<polygon
				className="a"
				points="20.999 20.25 2.999 20.25 2.999 6.75 11.999 6.75 20.999 6.75 20.999 20.25"
			/>
			<line className="a" x1="10.499" y1="9.75" x2="10.499" y2="11.25" />
			<line className="a" x1="13.499" y1="9.75" x2="13.499" y2="11.25" />
			<path
				className="a"
				d="M15.749,14.25c0,2.071,0,5.25-3.75,5.25-3,0-3.216-2.695-3.632-4.313a.751.751,0,0,1,.727-.937Z"
			/>
			<path className="a" d="M15.749,14.25h0A2.25,2.25,0,0,1,18,16.5h0" />
			<rect
				className="a"
				x="1.499"
				y="0.75"
				width={21}
				height={6}
				rx={1}
				ry={1}
			/>
			<rect className="a" x="8.999" y="6.75" width={6} height={3} />
			<path d="M19.124,2.25a1.125,1.125,0,1,0,1.125,1.125A1.125,1.125,0,0,0,19.124,2.25Z" />
			<path d="M15.374,2.25A1.125,1.125,0,1,0,16.5,3.375,1.125,1.125,0,0,0,15.374,2.25Z" />
		</svg>
	);
}
