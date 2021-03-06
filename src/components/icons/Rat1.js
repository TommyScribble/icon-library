import React from 'react';

export default function Rat1(props) {
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
			<title>rat</title>
			<path
				className="cls-1"
				d="M19,2.25A3.987,3.987,0,0,0,15.035,5.9a7.411,7.411,0,0,0-6.07,0A3.991,3.991,0,1,0,5,10.25c.069,0,.133-.017.2-.02A6.068,6.068,0,0,0,5,11.75c0,7.5,5,10,7,10s7-2.5,7-10a6.068,6.068,0,0,0-.2-1.52c.067,0,.131.02.2.02a4,4,0,0,0,0-8Z"
			/>
			<path className="cls-1" d="M22.46,4.25c-3.5-1.5-5.46,1-5.46,3" />
			<path className="cls-1" d="M7,7.25c0-2-1.967-4.5-5.467-3" />
			<path
				className="cls-1"
				d="M8.75,12.75A.25.25,0,1,1,8.5,13a.25.25,0,0,1,.25-.25"
			/>
			<path
				className="cls-1"
				d="M15.25,12.75A.25.25,0,1,1,15,13a.25.25,0,0,1,.25-.25"
			/>
			<path className="cls-1" d="M16.5,15.75s2.5,0,3.5,1" />
			<path className="cls-1" d="M15.5,17.75a5.52,5.52,0,0,1,2.5,2.5" />
			<path className="cls-1" d="M7.5,15.75s-2.5,0-3.5,1" />
			<path className="cls-1" d="M8.5,17.75A5.52,5.52,0,0,0,6,20.25" />
			<path
				className="cls-1"
				d="M13.5,20.25a1.6,1.6,0,0,1-1.5,1.5,1.6,1.6,0,0,1-1.5-1.5c0-.69.672-1,1.5-1S13.5,19.56,13.5,20.25Z"
			/>
		</svg>
	);
}
