import React from 'react';
import Icon from './components/ScribbleIcons';

const IconPreview = () => {
	return (
		<>
			<h3 className="title">Carets</h3>
			<div className="columns">
				<div data-testid="CaretUp" className="column has-text-centered">
					<Icon iconName={'CaretUp'} />
					<p>CaretUp</p>
				</div>
				<div data-testid="CaretUp1" className="column has-text-centered">
					<Icon iconName={'CaretUp1'} />
					<p>CaretUp1</p>
				</div>
				<div data-testid="CaretUp2" className="column has-text-centered">
					<Icon iconName={'CaretUp2'} />
					<p>CaretUp2</p>
				</div>
			</div>
			<h3 className="title">Random</h3>
			<div className="columns">
				<div className="column has-text-centered">
					<Icon iconName={'AnalyticsGraphBar'} />
					<p>AnalyticsGraphBar</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'AnalyticsGraphBar1'} />
					<p>AnalyticsGraphBar1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'AnalyticsGraphBar2'} />
					<p>AnalyticsGraphBar2</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'BabyTrolley'} />
					<p>BabyTrolley</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'BabyTrolley1'} />
					<p>BabyTrolley1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'BabyTrolley2'} />
					<p>BabyTrolley2</p>
				</div>
			</div>
			<div className="columns">
				<div className="column has-text-centered">
					<Icon iconName={'Burger'} />
					<p>Burger</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'Burger1'} />
					<p>Burger1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'Burger2'} />
					<p>Burger2</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'Cross'} />
					<p>Cross</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'Cross1'} />
					<p>Cross1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'Cross2'} />
					<p>Cross2</p>
				</div>
			</div>
		</>
	);
};

export default IconPreview;
