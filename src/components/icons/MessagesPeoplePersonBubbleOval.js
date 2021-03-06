import React from 'react';

export default function MessagesPeoplePersonBubbleOval(props) {
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
			<title>messages-people-person-bubble-oval</title>
			<path
				className="a"
				d="M12.749,15.75h3v4.5l4.5-4.5h1.494a1.506,1.506,0,0,0,1.506-1.506V2.25a1.5,1.5,0,0,0-1.5-1.5h-12a1.5,1.5,0,0,0-1.5,1.5v4.5"
			/>
			<path d="M19.874,7.125A1.125,1.125,0,1,0,21,8.25a1.125,1.125,0,0,0-1.125-1.125Z" />
			<path d="M12.374,7.125A1.125,1.125,0,1,0,13.5,8.25a1.125,1.125,0,0,0-1.125-1.125Z" />
			<path d="M16.124,7.125A1.125,1.125,0,1,0,17.249,8.25a1.125,1.125,0,0,0-1.125-1.125Z" />
			<circle className="a" cx="6.749" cy="13.125" r="3.375" />
			<path className="a" d="M12.749,23.25a6.054,6.054,0,0,0-12,0" />
		</svg>
	);
}
