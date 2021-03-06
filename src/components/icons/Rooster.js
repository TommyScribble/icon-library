import React from 'react';

export default function Rooster(props) {
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
			<title>rooster</title>
			<path
				className="a"
				d="M12,3A2.25,2.25,0,1,0,7.5,3,2.25,2.25,0,0,0,5.249.75,2.1,2.1,0,0,0,3,3C3,4.5,4.5,6.75,4.5,6.75l.265.4"
			/>
			<path
				className="a"
				d="M14.735,7.147,15,6.75S16.5,4.5,16.5,3A2.1,2.1,0,0,0,14.249.75,2.25,2.25,0,0,0,12,3"
			/>
			<path
				className="a"
				d="M17.084,11.179l4.031,1.728a.75.75,0,0,1,.077,1.34L17.249,16.5"
			/>
			<path
				className="a"
				d="M19.067,15.462l.432.288s2.25,1.5,2.25,3.75-3,3-4.5,1.5"
			/>
			<path d="M13.874,10.5A1.125,1.125,0,1,0,15,11.625,1.125,1.125,0,0,0,13.874,10.5Z" />
			<path
				className="a"
				d="M9.749,5.25a7.5,7.5,0,0,0-7.5,7.5v8.625a1.875,1.875,0,0,0,3.75,0,1.875,1.875,0,0,0,3.75,0,1.875,1.875,0,0,0,3.75,0,1.875,1.875,0,1,0,3.75,0V12.75A7.5,7.5,0,0,0,9.749,5.25Z"
			/>
		</svg>
	);
}
