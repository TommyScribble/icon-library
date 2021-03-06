import React from 'react';

export default function MoneyWalletOpen1(props) {
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
			<title>money-wallet-open</title>
			<path
				className="cls-1"
				d="M1.3,1.758,14.59,5.077A4.054,4.054,0,0,1,17.5,8.805v12a2.272,2.272,0,0,1-2.92,2.312L3.42,20.493A3.983,3.983,0,0,1,.5,16.805v-13a3.009,3.009,0,0,1,3-3h17a3.009,3.009,0,0,1,3,3v11a3.008,3.008,0,0,1-3,3h-3"
			/>
			<line className="cls-1" x1="9.5" y1="3.805" x2="19.5" y2="3.805" />
			<circle className="cls-1" cx={13} cy="13.805" r={2} />
			<line className="cls-1" x1="17.5" y1="8.805" x2="19.5" y2="8.805" />
		</svg>
	);
}
