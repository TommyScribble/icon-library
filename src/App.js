import React from 'react';
import 'bulma/css/bulma.css';
import IconPreview from './IconPreview';

const App = () => {
	return (
		<section className="section">
			<div className="container">
				<h1 className="title">Scribbles Icon Library</h1>
				<h2 className="subtitle">
					Use the icon names below for the iconName prop
				</h2>
				<IconPreview />
			</div>
		</section>
	);
};

export default App;
