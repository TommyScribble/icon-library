import React from 'react';

export default function TakingPicturesCircle(props) {
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
			<title>taking-pictures-circle</title>
			<circle className="cls-1" cx={12} cy={12} r="2.5" />
			<path
				className="cls-1"
				d="M18,8.5H16a1.391,1.391,0,0,1-.854-.354L13.854,6.854A1.391,1.391,0,0,0,13,6.5H11a1.391,1.391,0,0,0-.854.354L8.854,8.146A1.391,1.391,0,0,1,8,8.5H6A1.5,1.5,0,0,0,4.5,10v5A1.5,1.5,0,0,0,6,16.5H18A1.5,1.5,0,0,0,19.5,15V10A1.5,1.5,0,0,0,18,8.5Z"
			/>
			<circle className="cls-1" cx={12} cy={12} r="11.5" />
			<path
				className="cls-1"
				d="M17,10.75a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
			/>
		</svg>
	);
}
