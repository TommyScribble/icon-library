import React from 'react';

export default function MoneyWalletOpen2(props) {
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
			<title>money-wallet-open</title>
			<path
				className="a"
				d="M2.959,2.769,13.907,5.88a3.769,3.769,0,0,1,2.592,3.5v10.51a2.052,2.052,0,0,1-2.6,2.167L4.85,19.592a3.7,3.7,0,0,1-2.6-3.457V4.688A2.752,2.752,0,0,1,4.921,1.875H18.749a3,3,0,0,1,3,3v8.953a3.074,3.074,0,0,1-3.11,3.047H16.5"
			/>
			<path d="M12.374,12.375A1.125,1.125,0,1,0,13.5,13.5a1.125,1.125,0,0,0-1.125-1.125Z" />
			<line className="a" x1="21.749" y1="9.375" x2="16.499" y2="9.375" />
		</svg>
	);
}
