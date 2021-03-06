import React from 'react';

export default function MobilePhone22(props) {
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
			<title>mobile-phone-2</title>
			<line className="cls-1" x1="18.5" y1="19.5" x2="5.5" y2="19.5" />
			<path
				className="cls-1"
				d="M12,21.25a.25.25,0,0,1,.25.25h0a.25.25,0,0,1-.25.25h0a.25.25,0,0,1-.25-.25h0a.25.25,0,0,1,.25-.25"
			/>
			<line className="cls-1" x1={12} y1="21.25" x2={12} y2="21.25" />
			<rect
				className="cls-1"
				x="5.5"
				y="0.5"
				width={13}
				height={23}
				rx={2}
				ry={2}
			/>
		</svg>
	);
}
