import React from 'react';

export default function Monkey2(props) {
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
			<title>monkey</title>
			<path
				className="cls-1"
				d="M6.587,20.467A5.074,5.074,0,0,1,6.5,19.5a15.515,15.515,0,0,1,1.5-6c-2.209,0-3.5-1.791-3.5-4a4,4,0,0,1,4-4h7a4,4,0,0,1,4,4c0,2.209-1.291,4-3.5,4a15.515,15.515,0,0,1,1.5,6,5.074,5.074,0,0,1-.087.967"
			/>
			<path
				className="cls-1"
				d="M8.25,9.25A.25.25,0,1,1,8,9.5a.25.25,0,0,1,.25-.25"
			/>
			<path
				className="cls-1"
				d="M15.75,9.25A.25.25,0,1,0,16,9.5a.25.25,0,0,0-.25-.25"
			/>
			<line className="cls-1" x1={10} y1={14} x2={11} y2={15} />
			<line className="cls-1" x1={14} y1={14} x2={13} y2={15} />
			<path className="cls-1" d="M12,20.5a13.267,13.267,0,0,1-5.5-1" />
			<path className="cls-1" d="M12,20.5a13.267,13.267,0,0,0,5.5-1" />
			<path
				className="cls-1"
				d="M12,23.5c7.5,0,9.5-4,9.5-9.5a3.972,3.972,0,0,0,2-3.5,2.906,2.906,0,0,0-2-3c0-5.5-4.5-7-9.5-7S2.5,2,2.5,7.5a2.906,2.906,0,0,0-2,3,3.972,3.972,0,0,0,2,3.5C2.5,19.5,4.5,23.5,12,23.5Z"
			/>
		</svg>
	);
}
