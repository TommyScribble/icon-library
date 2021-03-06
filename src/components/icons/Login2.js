import React from 'react';

export default function Login2(props) {
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
			<title>login-2</title>
			<path
				className="cls-1"
				d="M12.5,2.5H20a.5.5,0,0,1,.5.5V21a.5.5,0,0,1-.5.5H12.5"
			/>
			<path
				className="cls-1"
				d="M3.5,21.222a.5.5,0,0,0,.392.488l8,1.778A.5.5,0,0,0,12.5,23V1a.5.5,0,0,0-.608-.488l-8,1.778a.5.5,0,0,0-.392.488Z"
			/>
			<circle className="cls-1" cx={9} cy={12} r="1.5" />
		</svg>
	);
}
