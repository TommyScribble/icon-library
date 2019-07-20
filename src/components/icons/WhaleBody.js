import React from 'react';

export default function WhaleBody(props) {
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
			<title>whale-body</title>
			<path
				className="a"
				d="M11.973,23.25c-6.91,0-10.637-4.458-11.18-8.092a1.523,1.523,0,0,1,.572-1.451A7.882,7.882,0,0,1,5.973,12h12c3,0,3-3.75,0-3.75H16.927a.749.749,0,0,1-.607-1.189,4.532,4.532,0,0,1,3.9-1.811,3.668,3.668,0,0,1,1.86-3.243.748.748,0,0,1,1.14.64v11.6a8.715,8.715,0,0,1-3.444,6.459"
			/>
			<path className="a" d="M2.973,3.75a3,3,0,0,1,6,0" />
			<path className="a" d="M14.973,3.75a3,3,0,0,0-6,0V9" />
			<path
				className="a"
				d="M.91,15.75H5.223c3.75,0,5.25,3,8.25,3.75,0,0,.235,1.617,3,3,3,1.5,4.5,0,4.5,0l-3-4.5"
			/>
			<path d="M12.348,14.25a1.125,1.125,0,1,0,1.125,1.125,1.125,1.125,0,0,0-1.125-1.125Z" />
		</svg>
	);
}
