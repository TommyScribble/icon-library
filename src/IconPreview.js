import React from 'react';
import Icon from './components/ScribbleIcons';

const IconPreview = () => {
	return (
		<React.Fragment>
			<h3 className="title">Carets</h3>
			<div className="columns">
				<div className="column has-text-centered">
					<Icon iconName={'CaretDown'} />
					<p>CaretDown</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretDown1'} />
					<p>CaretDown1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretDown2'} />
					<p>CaretDown2</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretLeft'} />
					<p>CaretLeft</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretLeft1'} />
					<p>CaretLeft1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretLeft2'} />
					<p>CaretLeft2</p>
				</div>
			</div>
			<div className="columns">
				<div className="column has-text-centered">
					<Icon iconName={'CaretRight'} />
					<p>CaretRight</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretRight1'} />
					<p>CaretRight1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretRight2'} />
					<p>CaretRight2</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretUp'} />
					<p>CaretUp</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretUp1'} />
					<p>CaretUp1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretUp2'} />
					<p>CaretUp2</p>
				</div>
			</div>
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
				{/* <div className="column has-text-centered">
					<Icon iconName={'CaretRight1'} />
					<p>CaretRight1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretRight2'} />
					<p>CaretRight2</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretUp'} />
					<p>CaretUp</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretUp1'} />
					<p>CaretUp1</p>
				</div>
				<div className="column has-text-centered">
					<Icon iconName={'CaretUp2'} />
					<p>CaretUp2</p>
				</div> */}
			</div>
		</React.Fragment>
	);
};

export default IconPreview;
