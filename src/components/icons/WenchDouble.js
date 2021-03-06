import React from 'react';

export default function WenchDouble(props) {
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
			<title>wench-double</title>
			<path
				className="cls-1"
				d="M23.146,2.854,21,5H19V3L21.146.854a4,4,0,0,0-5.292,5.292L6.146,15.854A4,4,0,0,0,.854,21.146L3,19H5v2L2.854,23.146a4,4,0,0,0,5.292-5.292l9.708-9.708a4,4,0,0,0,5.292-5.292Z"
			/>
			<path
				className="cls-1"
				d="M12,10,8.146,6.146A4,4,0,0,0,2.854.854L5,3V5H3L.854,2.854A4,4,0,0,0,6.146,8.146L10,12"
			/>
			<path
				className="cls-1"
				d="M12,14l3.854,3.854a4,4,0,0,0,5.292,5.292L19,21V19h2l2.146,2.146a4,4,0,0,0-5.292-5.292L14,12"
			/>
		</svg>
	);
}
