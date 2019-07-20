import React from 'react';

export default function DatingSmartphoneMan1(props) {
	return (
		<svg
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
							'.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}',
					}}
				/>
			</defs>
			<title>dating-smartphone-man</title>
			<circle className="a" cx="8.249" cy="10.5" r={3} />
			<path className="a" d="M12.749,19.5a4.5,4.5,0,0,0-9,0" />
			<path
				className="a"
				d="M15.749,14.25V21a2.25,2.25,0,0,1-2.25,2.25H3A2.25,2.25,0,0,1,.749,21V4.5A2.25,2.25,0,0,1,3,2.25h3.75"
			/>
			<path
				className="a"
				d="M17.249,11.25,12.136,5.915a3.024,3.024,0,0,1-.567-3.492h0a3.025,3.025,0,0,1,4.845-.786l.835.835.835-.835a3.026,3.026,0,0,1,4.846.786h0a3.025,3.025,0,0,1-.567,3.492Z"
			/>
		</svg>
	);
}
