import React from 'react';

export default function DesignToolPenStation2(props) {
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
			<title>design-tool-pen-station</title>
			<path className="cls-1" d="M17,12.5h1a3,3,0,0,1,0,6H17" />
			<path
				className="cls-1"
				d="M17,21.5a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V11a.5.5,0,0,1,.5-.5h12a.5.5,0,0,1,.5.5Z"
			/>
			<path
				className="cls-1"
				d="M16.881.564c1.033,1.574-.5,2.437-.853,3.282a1.548,1.548,0,0,0,.885,2.129C19.813,7.2,20.677,1.482,16.881.564Z"
			/>
			<line className="cls-1" x1={14} y1="10.5" x2="16.609" y2="5.813" />
			<line className="cls-1" x1="17.641" y1="6.156" x2={16} y2="10.5" />
			<polygon
				className="cls-1"
				points="8 10.5 5 10.5 3.5 7.5 3 4.5 5.5 6 8 10.5"
			/>
			<line className="cls-1" x1="3.5" y1="7.5" x2="5.5" y2={6} />
			<path
				className="cls-1"
				d="M13,1a.5.5,0,0,0-.5-.5h-3A.5.5,0,0,0,9,1v9.5h4Z"
			/>
			<line className="cls-1" x1={13} y1="2.5" x2={11} y2="2.5" />
			<line className="cls-1" x1={13} y1="4.5" x2={12} y2="4.5" />
			<line className="cls-1" x1={13} y1="6.5" x2={11} y2="6.5" />
			<line className="cls-1" x1={13} y1="8.5" x2={12} y2="8.5" />
		</svg>
	);
}
