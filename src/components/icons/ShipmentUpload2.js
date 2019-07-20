import React from 'react';

export default function ShipmentUpload2(props) {
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
			<title>shipment-upload</title>
			<path
				className="cls-1"
				d="M12.9,23.314a1,1,0,0,1-.8.013L1.115,18.751A1,1,0,0,1,.5,17.828V6.15a1,1,0,0,1,.6-.917L11.6.668a1,1,0,0,1,.8,0L22.9,5.233a1,1,0,0,1,.6.917v11.7a1,1,0,0,1-.586.911Z"
			/>
			<line className="cls-1" x1="12.5" y1="10.494" x2="12.5" y2="23.415" />
			<line className="cls-1" x1="12.5" y1="10.494" x2="23.319" y2="5.577" />
			<polyline className="cls-1" points="17.473 2.874 6.5 7.926 6.5 11.585" />
			<line className="cls-1" x1="16.5" y1="15.494" x2="16.5" y2="18.994" />
			<polyline className="cls-1" points="15 16.994 16.5 15.494 17.75 16.744" />
			<line className="cls-1" x1="20.5" y1="13.494" x2="20.5" y2="16.994" />
			<polyline className="cls-1" points="19 14.994 20.5 13.494 21.75 14.744" />
			<line className="cls-1" x1="12.5" y1="10.494" x2="0.685" y2="5.571" />
		</svg>
	);
}
