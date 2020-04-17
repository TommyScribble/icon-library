import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders welcome', () => {
	const { getByText } = render(<App />);
	expect(getByText('Scribbles Icon Library')).toBeInTheDocument();
});

it('renders welcome message', () => {
	const { getByText } = render(<App />);
	expect(
		getByText('Use the icon names below for the iconName prop')
	).toBeInTheDocument();
});
