import React from 'react';

export default function View(props) {
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
			<title>view</title>
			<path
				className="a"
				d="M12,5.251C7.968,5.184,3.8,8,1.178,10.885a1.662,1.662,0,0,0,0,2.226C3.742,15.935,7.9,18.817,12,18.749c4.1.068,8.258-2.814,10.824-5.638a1.662,1.662,0,0,0,0-2.226C20.2,8,16.03,5.184,12,5.251Z"
			/>
			<path
				className="a"
				d="M15.749,12A3.75,3.75,0,1,1,12,8.25,3.75,3.75,0,0,1,15.749,12Z"
			/>
		</svg>
	);
}
