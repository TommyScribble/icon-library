import React from 'react';

export default function MapsPin(props) {
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
			<title>maps-pin</title>
			<path d="M12,4.125A1.125,1.125,0,1,0,13.124,5.25,1.125,1.125,0,0,0,12,4.125Z" />
			<path
				className="a"
				d="M12,.75a4.5,4.5,0,0,1,4.5,4.5c0,1.921-2.688,5.577-3.909,7.138a.75.75,0,0,1-1.182,0C10.187,10.826,7.5,7.171,7.5,5.25A4.5,4.5,0,0,1,12,.75Z"
			/>
			<path
				className="a"
				d="M6.005,9.781a1.5,1.5,0,0,0-1.109.97l-3.441,10.5a1.5,1.5,0,0,0,1.414,2h18.26a1.5,1.5,0,0,0,1.415-2L19.1,10.751a1.5,1.5,0,0,0-1.117-.971"
			/>
			<line className="a" x1="7.499" y1="23.249" x2="8.999" y2="14.25" />
			<line className="a" x1="16.499" y1="23.249" x2="14.999" y2="14.25" />
			<line className="a" x1="2.303" y1="18.75" x2="21.724" y2="18.75" />
			<line className="a" x1="3.749" y1="14.25" x2="8.999" y2="14.25" />
			<line className="a" x1="14.999" y1="14.25" x2="20.249" y2="14.25" />
		</svg>
	);
}
