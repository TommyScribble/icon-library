import React from 'react';

export default function InsuranceCard2(props) {
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
			<title>insurance-card</title>
			<rect
				className="cls-1"
				x="0.5"
				y={4}
				width={23}
				height={16}
				rx={2}
				ry={2}
			/>
			<line className="cls-1" x1="0.5" y1={8} x2="23.5" y2={8} />
			<line className="cls-1" x1="21.5" y1={12} x2="13.5" y2={12} />
			<line className="cls-1" x1="16.5" y1={15} x2="13.5" y2={15} />
			<path
				className="cls-1"
				d="M9.5,13.25A.25.25,0,0,0,9.25,13H7.5V11.25A.25.25,0,0,0,7.25,11H5.75a.25.25,0,0,0-.25.25V13H3.75a.25.25,0,0,0-.25.25v1.5a.25.25,0,0,0,.25.25H5.5v1.75a.25.25,0,0,0,.25.25h1.5a.25.25,0,0,0,.25-.25V15H9.25a.25.25,0,0,0,.25-.25Z"
			/>
		</svg>
	);
}
