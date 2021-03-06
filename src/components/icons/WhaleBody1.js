import React from 'react';

export default function WhaleBody1(props) {
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
			<title>whale-body</title>
			<path
				className="cls-1"
				d="M19.267,19.326a12.206,12.206,0,0,0,4.11-8.576v-9a3,3,0,0,0-3,3,2.9,2.9,0,0,0,.045.44,2.985,2.985,0,0,0-4.545,2.56h2.5a2.5,2.5,0,0,1,0,5H6.877A15.648,15.648,0,0,0,.924,14.037a.5.5,0,0,0-.253.673C2.7,18.987,7.2,22.25,11.877,22.25a10.521,10.521,0,0,0,5.5-1.5"
			/>
			<path
				className="cls-1"
				d="M1.535,16.25H5.461a4.006,4.006,0,0,1,2.855,1.207,7.873,7.873,0,0,0,5.061,2.293"
			/>
			<path
				className="cls-1"
				d="M14.377,17.25a5.665,5.665,0,0,0,2,3,4.9,4.9,0,0,0,3.5.5l-1.5-3.5"
			/>
			<path
				className="cls-1"
				d="M10.127,15.25a.25.25,0,1,1-.25.25.25.25,0,0,1,.25-.25"
			/>
			<path className="cls-1" d="M3.377,4.75a2.5,2.5,0,0,1,5,0" />
			<path className="cls-1" d="M13.377,4.75a2.5,2.5,0,0,0-5,0v6" />
		</svg>
	);
}
