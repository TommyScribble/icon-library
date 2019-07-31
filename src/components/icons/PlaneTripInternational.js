import React from 'react';

export default function PlaneTripInternational(props) {
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
			<title>plane-trip-international</title>
			<path
				className="a"
				d="M20.776,12.79,11.89,15.777,10.7,14.594l-1.766.593a.75.75,0,0,0-.32,1.211L11,19.071a1.5,1.5,0,0,0,1.6.423l2.617-.88-.53,3.781a.75.75,0,0,0,.982.815l1.36-.457a.748.748,0,0,0,.46-.44l1.994-5.132,2.488-.837a1.875,1.875,0,1,0-1.2-3.554Z"
			/>
			<path
				className="a"
				d="M18.288,13.626l-2.78-1.914a.749.749,0,0,0-.664-.093l-1.338.449a.751.751,0,0,0-.29,1.243l1.517,1.51"
			/>
			<path className="a" d="M6,17.932A9,9,0,1,1,18.749,9.75" />
			<path
				className="a"
				d="M4.024,2.805l5.281,2a1.5,1.5,0,0,1,.944,1.7L9.935,8.069A1.5,1.5,0,0,1,8.828,9.23l-2.079.52L5.6,12.635a3,3,0,0,1-1.121,1.382l-1.83,1.257"
			/>
			<path
				className="a"
				d="M15.994,3.27,14.527,6.194a1.5,1.5,0,0,0-.081,1.145L15,9"
			/>
		</svg>
	);
}