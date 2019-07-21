import React from 'react';
import propTypes from 'prop-types';

const CaretDown = props => {
	const { iconName, fill, width, focussable, ariaHidden, svgClass } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 187 109"
			className={svgClass}
			width={width}
			focussable={focussable}
			aria-hidden={ariaHidden}
			aria-labelledby={iconName}
		>
			<path
				d="M187 15.5447C187 17.1678 186.375 18.6037 185.126 19.8522L97.8096 107.127C96.5605 108.376 95.1239 109 93.5 109C91.8761 109 90.4395 108.376 89.1904 107.127L1.87375 19.8522C0.624583 18.6037 0 17.1678 0 15.5447C0 13.9215 0.624583 12.4857 1.87375 11.2371L11.2425 1.87285C12.4917 0.624284 13.9282 0 15.5521 0C17.176 0 18.6126 0.624284 19.8617 1.87285L93.5 75.4759L167.138 1.87285C168.387 0.624284 169.824 0 171.448 0C173.072 0 174.508 0.624284 175.758 1.87285L185.126 11.2371C186.375 12.4857 187 13.9215 187 15.5447Z"
				fill={fill}
			/>
		</svg>
	);
};

CaretDown.defaultProps = {
	fill: '#4d4d4d',
	width: '24px',
	focussable: 'false',
	ariaHidden: true,
};

CaretDown.propTypes = {
	iconName: propTypes.string.isRequired,
	fill: propTypes.string,
	width: propTypes.string,
	focussable: propTypes.string,
	ariaHidden: propTypes.bool,
	svgClass: propTypes.string,
};

export default CaretDown;
