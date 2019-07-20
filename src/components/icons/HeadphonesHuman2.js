import React from 'react';

export default function HeadphonesHuman2(props) {
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
			<title>headphones-human</title>
			<path className="a" d="M8.713,2.548a8.989,8.989,0,0,0-2.25,16.5v4.2" />
			<circle className="a" cx="10.963" cy="11.25" r="3.75" />
			<path
				className="a"
				d="M13.213,8.25V1.5a.75.75,0,0,0-.75-.75h-3a.75.75,0,0,0-.75.75V8.25"
			/>
			<path
				className="a"
				d="M15.463,23.25V21.01l1.007.168a3,3,0,0,0,3.493-2.959V15.76l.935-.233a1.5,1.5,0,0,0,.884-2.288L19.963,10.51V9.76c0-3.541-2.868-6.51-6.75-7.3"
			/>
		</svg>
	);
}
