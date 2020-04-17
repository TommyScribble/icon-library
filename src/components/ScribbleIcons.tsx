import IconObj from './IconObj';

type Props = {
	iconName: string;
};

const Icon = ({ iconName }: Props) => {
	if (!iconName) console.log(`Please add and iconName Prop`);
	if (!IconObj[iconName])
		console.log(
			`The is no icon called ${iconName} in this repo. Please refer to the readme`
		);
	return IconObj[iconName];
};

export default Icon;
