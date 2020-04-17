import React from 'react';
import { render } from '@testing-library/react';
import IconPreview from './IconPreview';

describe('renders 3 types of carets with a title', () => {
	it('renders the title', () => {
		const { getByText } = render(<IconPreview />);
		expect(getByText('Carets')).toBeInTheDocument();
	});

	it('renders Caret', () => {
		const { getByTestId } = render(<IconPreview />);
		expect(getByTestId('CaretUp')).toBeInTheDocument();
	});

	it('renders Caret1', () => {
		const { getByTestId } = render(<IconPreview />);
		expect(getByTestId('CaretUp1')).toBeInTheDocument();
	});

	it('renders Caret2', () => {
		const { getByTestId } = render(<IconPreview />);
		expect(getByTestId('CaretUp2')).toBeInTheDocument();
	});
});

describe('renders the random title and components', () => {
	it('renders the title', () => {
		const { getByText } = render(<IconPreview />);
		expect(getByText('Random')).toBeInTheDocument();
	});
});
