import React from 'react';

export default function Flag1(props) {
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
			<title>flag</title>
			<line className="a" x1="0.749" y1="0.75" x2="0.749" y2="23.25" />
			<path className="a" d="M.749,2.25h12a1.5,1.5,0,0,1,1.5,1.5v12H.749" />
			<path className="a" d="M9.749,20.25a4.5,4.5,0,0,1,4.5-4.5" />
			<path
				className="a"
				d="M14.249,6.75H22.5A.75.75,0,0,1,23.058,8l-4,4.505a1.5,1.5,0,0,0,0,1.994l4,4.5a.75.75,0,0,1-.56,1.248H9a1.5,1.5,0,0,1-1.5-1.5v-3"
			/>
		</svg>
	);
}
