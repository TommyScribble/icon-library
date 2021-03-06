import React from 'react';

const Binocular1 = props => {
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
			<title>binocular</title>
			<circle className="a" cx="5.249" cy={18} r="4.5" />
			<path
				className="a"
				d="M9.749,18V4.125a2.625,2.625,0,0,0-5.156-.7L.911,16.806"
			/>
			<circle className="a" cx="18.749" cy={18} r="4.5" />
			<path
				className="a"
				d="M14.249,18V4.125a2.625,2.625,0,0,1,5.156-.7l3.683,13.377"
			/>
			<rect className="a" x="9.749" y={9} width="4.5" height={3} />
		</svg>
	);
};

export default Binocular1;
