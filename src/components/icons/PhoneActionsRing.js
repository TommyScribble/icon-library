import React from 'react';

export default function PhoneActionsRing(props) {
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
			<title>phone-actions-ring</title>
			<path
				className="cls-1"
				d="M7.492,10.013a2,2,0,0,0,0-2.829L5.37,5.063a2,2,0,0,0-2.828,0L1.378,6.227A3,3,0,0,0,1,10,46.5,46.5,0,0,0,14,23a3,3,0,0,0,3.773-.379l1.165-1.164a2,2,0,0,0,0-2.828l-2.122-2.121a2,2,0,0,0-2.828,0l-.707.707a47.418,47.418,0,0,1-6.5-6.5Z"
			/>
			<path className="cls-1" d="M12,.5A11.5,11.5,0,0,1,23.5,12" />
			<path className="cls-1" d="M12,4.5A7.5,7.5,0,0,1,19.5,12" />
			<path className="cls-1" d="M12,8.5A3.5,3.5,0,0,1,15.5,12" />
		</svg>
	);
}
