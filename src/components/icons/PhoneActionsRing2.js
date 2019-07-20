import React from 'react';

export default function PhoneActionsRing2(props) {
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
			<title>phone-actions-ring</title>
			<path
				className="a"
				d="M12.369,22.54l.01.006a4.5,4.5,0,0,0,5.6-.614l.63-.63a1.5,1.5,0,0,0,0-2.121l-2.652-2.652a1.5,1.5,0,0,0-2.121,0h0a1.5,1.5,0,0,1-2.122,0L7.47,12.287a1.5,1.5,0,0,1,0-2.121h0a1.5,1.5,0,0,0,0-2.122L4.818,5.393a1.5,1.5,0,0,0-2.121,0l-.63.629a4.5,4.5,0,0,0-.614,5.6l.006.01A40.62,40.62,0,0,0,12.369,22.54Z"
			/>
			<path className="a" d="M11.249,8.25a4.5,4.5,0,0,1,4.5,4.5" />
			<path className="a" d="M11.249,4.5a8.25,8.25,0,0,1,8.25,8.25" />
			<path className="a" d="M11.249.75a12,12,0,0,1,12,12" />
		</svg>
	);
}
