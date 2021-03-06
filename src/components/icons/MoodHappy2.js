import React from 'react';

export default function MoodHappy2(props) {
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
			<title>mood-happy</title>
			<path
				className="a"
				d="M12.749.75A10.485,10.485,0,0,0,3.832,16.775L.749,23.25l6.475-3.083A10.5,10.5,0,1,0,12.749.75Z"
			/>
			<path className="a" d="M15.749,13.5a3,3,0,0,1-6,0Z" />
			<path d="M8.124,8.875a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z" />
			<path d="M17.124,8.875a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z" />
		</svg>
	);
}
