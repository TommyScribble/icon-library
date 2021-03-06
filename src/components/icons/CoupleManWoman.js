import React from 'react';

export default function CoupleManWoman(props) {
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
			<title>couple-man-woman</title>
			<circle className="a" cx="5.249" cy="14.25" r={3} />
			<path className="a" d="M9.749,23.25a4.5,4.5,0,0,0-9,0" />
			<path className="a" d="M22.5,23.25a4.5,4.5,0,0,0-9,0" />
			<circle className="a" cx="17.999" cy="14.25" r={3} />
			<path className="a" d="M15,14.25S15,18,12.749,18" />
			<path className="a" d="M21,14.25S21,18,23.249,18" />
			<path
				className="a"
				d="M16.271,1.5a2.428,2.428,0,0,0-3.515,0L11.249,3.06,9.743,1.5a2.429,2.429,0,0,0-3.516,0,2.632,2.632,0,0,0,0,3.635l4.487,4.639a.74.74,0,0,0,1.07,0l4.487-4.639A2.632,2.632,0,0,0,16.271,1.5Z"
			/>
		</svg>
	);
}
