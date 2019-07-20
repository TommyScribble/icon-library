import React from 'react';

export default function LabFlaskExperiment(props) {
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
			<title>lab-flask-experiment</title>
			<line className="a" x1="6.749" y1="0.75" x2="17.249" y2="0.75" />
			<path
				className="a"
				d="M15.749,8.25V.75h-7.5v7.5L1.512,18.615A3,3,0,0,0,4.028,23.25H19.971a3,3,0,0,0,2.516-4.635Z"
			/>
			<line className="a" x1="5.324" y1="12.75" x2="18.674" y2="12.75" />
			<line className="a" x1="14.249" y1="17.25" x2="17.249" y2="17.25" />
			<line className="a" x1="15.749" y1="15.75" x2="15.749" y2="18.75" />
			<path d="M6.749,18.375A1.125,1.125,0,1,0,7.874,19.5a1.125,1.125,0,0,0-1.125-1.125Z" />
			<path d="M9.749,15.375A1.125,1.125,0,1,0,10.874,16.5a1.125,1.125,0,0,0-1.125-1.125Z" />
			<line className="a" x1="15.749" y1="3.75" x2="12.749" y2="3.75" />
			<line className="a" x1="15.749" y1="6.75" x2="12.749" y2="6.75" />
		</svg>
	);
}
