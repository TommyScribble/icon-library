import React from 'react';

export default function DesignToolQuill2(props) {
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
			<title>design-tool-quill-2</title>
			<path
				className="cls-1"
				d="M23,.5A17.871,17.871,0,0,0,6.857,10.786L.5,23.5"
			/>
			<path
				className="cls-1"
				d="M3,18.5a11.742,11.742,0,0,0,10.867-7.295c.233-.569.482-1.1.738-1.6l-1.4-1.4A.414.414,0,0,1,13.5,7.5h2.329a14.418,14.418,0,0,1,7.218-5.872A.655.655,0,0,0,23.5,1V1A.5.5,0,0,0,23,.5"
			/>
			<line className="cls-1" x1="10.106" y1="16.106" x2="8.5" y2="14.5" />
			<line className="cls-1" x1="12.136" y1="14.136" x2="10.5" y2="12.5" />
		</svg>
	);
}
