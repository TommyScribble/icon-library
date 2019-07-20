import React from 'react';

export default function ModernTv3dGlasses2(props) {
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
			<title>modern-tv-3d-glasses</title>
			<path className="cls-1" d="M.5,6.5,4.4,1.3A2,2,0,0,1,6,.5H7.5" />
			<path className="cls-1" d="M19.5,6.5,15.6,1.3A2,2,0,0,0,14,.5H12.5" />
			<rect
				className="cls-1"
				x="10.5"
				y="13.5"
				width={13}
				height={10}
				rx={1}
				ry={1}
			/>
			<path
				className="cls-1"
				d="M12.5,21.5H15a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0-3H12.5"
			/>
			<line className="cls-1" x1="13.5" y1="18.5" x2={15} y2="18.5" />
			<path className="cls-1" d="M18.5,15.5a3,3,0,0,1,0,6Z" />
			<path
				className="cls-1"
				d="M18.786,11.5l.714-5H.5l.717,5.02A2.306,2.306,0,0,0,3.5,13.5h2a2.885,2.885,0,0,0,2.7-1.873l.447-1.191a1.443,1.443,0,0,1,2.7,0l.4,1.064"
			/>
		</svg>
	);
}
