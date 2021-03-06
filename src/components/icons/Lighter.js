import React from 'react';

export default function Lighter(props) {
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
			<title>lighter</title>
			<path
				className="cls-1"
				d="M15.64,1.321a.25.25,0,0,0-.3.373,3.533,3.533,0,0,1,.185,3.622A2.269,2.269,0,0,1,14.715,4.3a.249.249,0,0,0-.347-.148,3.107,3.107,0,0,0-1.87,2.9,3.454,3.454,0,1,0,6.908,0A6.354,6.354,0,0,0,15.64,1.321Z"
			/>
			<path
				className="cls-1"
				d="M21.5,21.5a2,2,0,0,1-2,2h-9a2,2,0,0,1-2-2v-8h13Z"
			/>
			<path
				className="cls-1"
				d="M2.5,4.5a4,4,0,0,1,4-4h2v13h-2a4,4,0,0,1-4-4Z"
			/>
			<rect className="cls-1" x="12.5" y="10.5" width={7} height={3} />
		</svg>
	);
}
