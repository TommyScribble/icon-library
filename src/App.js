import React from 'react';
import 'bulma/css/bulma.css';
import IconPreview from './IconPreview';

const App = () => {
	return (
		<section className="section">
			<div className="container">
				<h1 className="title">Icon Library</h1>
				<IconPreview />
			</div>
		</section>
	);
};

export default App;
