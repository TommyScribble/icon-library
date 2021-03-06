import React from 'react';

export default function ShoppingBagHeart1(props) {
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
			<title>shopping-bag-heart</title>
			<path
				className="cls-1"
				d="M23.078,20.128A3,3,0,0,1,20.1,23.5H3.9A3,3,0,0,1,.922,20.128L2.5,7.5h19Z"
			/>
			<path
				className="cls-1"
				d="M6,5H4.566a1,1,0,0,0-.857.486L2.5,7.5h19L20.291,5.486A1,1,0,0,0,19.434,5H18"
			/>
			<path className="cls-1" d="M16,4.5a4,4,0,0,0-8,0v3h8Z" />
			<path
				className="cls-1"
				d="M11.937,19,8.528,15.444a2.018,2.018,0,0,1-.378-2.329h0a2.017,2.017,0,0,1,3.23-.524l.557.557.557-.557a2.017,2.017,0,0,1,3.23.524h0a2.018,2.018,0,0,1-.378,2.329Z"
			/>
		</svg>
	);
}
