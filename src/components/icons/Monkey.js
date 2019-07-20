import React from 'react';

export default function Monkey(props) {
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
			<title>monkey</title>
			<path className="a" d="M5.249,7.456a6.75,6.75,0,0,1,13.5,0" />
			<path d="M9.374,7.125A1.125,1.125,0,1,0,10.5,8.25,1.125,1.125,0,0,0,9.374,7.125Z" />
			<path d="M14.624,7.125A1.125,1.125,0,1,0,15.749,8.25a1.125,1.125,0,0,0-1.125-1.125Z" />
			<path
				className="a"
				d="M16.14,14.479a1.933,1.933,0,0,0,.026-.229,2.26,2.26,0,0,0-2.5-2.084A2.642,2.642,0,0,0,12,12.75a2.639,2.639,0,0,0-1.666-.584,2.26,2.26,0,0,0-2.5,2.084,2.167,2.167,0,0,0,.025.229A5.928,5.928,0,0,0,4.5,19.5c0,2.692,3.358,3.75,7.5,3.75s7.5-1.058,7.5-3.75A5.928,5.928,0,0,0,16.14,14.479Z"
			/>
			<path
				className="a"
				d="M4.848,17.733A13.256,13.256,0,0,0,12,19.5a13.243,13.243,0,0,0,7.151-1.767"
			/>
			<path
				className="a"
				d="M5.383,6.123a3,3,0,1,0-1.634,5.5,2.965,2.965,0,0,0,1.5-.416"
			/>
			<path className="a" d="M18.616,6.123a3,3,0,1,1,.133,5.086" />
		</svg>
	);
}
