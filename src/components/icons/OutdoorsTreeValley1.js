import React from 'react';

export default function OutdoorsTreeValley1(props) {
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
			<title>outdoors-tree-valley</title>
			<path
				className="a"
				d="M7.346,1.083a.75.75,0,0,0-1.248,0L2.222,7.5h2.25l-2.9,4.128a.75.75,0,0,0,.651,1.122h9a.75.75,0,0,0,.651-1.122L8.972,7.5h2.25Z"
			/>
			<line className="a" x1="6.722" y1="12.749" x2="6.722" y2="17.331" />
			<path
				className="a"
				d="M19.234,1.022a.614.614,0,0,0-1.021,0L15.041,6h1.841L14.3,9.581a.613.613,0,0,0,.532.918h7.771a.613.613,0,0,0,.533-.918L20.564,6h1.841Z"
			/>
			<line className="a" x1="18.723" y1="10.499" x2="18.723" y2="14.534" />
			<path className="a" d="M.777,18A13.518,13.518,0,0,1,16.45,23.251" />
			<path
				className="a"
				d="M10.941,18.517a15.7,15.7,0,0,1,10.781-4.268q.759,0,1.5.07"
			/>
		</svg>
	);
}
