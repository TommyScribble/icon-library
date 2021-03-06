import React from 'react';

export default function StampsFamous(props) {
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
			<title>stamps-famous</title>
			<rect className="cls-1" x="4.5" y="4.5" width={15} height={15} />
			<path
				className="cls-1"
				d="M12.654,4.5l-.408,1.634a1,1,0,0,0,.741,1.216L19.5,8.883"
			/>
			<path
				className="cls-1"
				d="M12.48,7.053,10,13.5h1.5v2a1,1,0,0,0,1,1h3V18l-2,1.5"
			/>
			<path
				className="cls-1"
				d="M13.5,9.75a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
			/>
			<path
				className="cls-1"
				d="M23.5,2.8a2.31,2.31,0,0,0-4.6-.3,2.323,2.323,0,0,0-4.6,0,2.323,2.323,0,0,0-4.6,0,2.322,2.322,0,0,0-4.6,0A2.31,2.31,0,1,0,2.5,5.1a2.323,2.323,0,0,0,0,4.6,2.323,2.323,0,0,0,0,4.6,2.323,2.323,0,0,0,0,4.6,2.31,2.31,0,1,0,2.6,2.6,2.323,2.323,0,0,0,4.6,0,2.323,2.323,0,0,0,4.6,0,2.323,2.323,0,0,0,4.6,0,2.31,2.31,0,1,0,2.6-2.6,2.323,2.323,0,0,0,0-4.6,2.323,2.323,0,0,0,0-4.6,2.323,2.323,0,0,0,0-4.6A2.323,2.323,0,0,0,23.5,2.8Z"
			/>
		</svg>
	);
}
