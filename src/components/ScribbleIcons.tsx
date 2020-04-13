import IconObj from './IconObj';

type Props = {
	iconName?: string;
};

const Icon = ({ iconName }: Props) => {
	if (!iconName) return console.log(`Please add and iconName Prop`);
	if (!IconObj[iconName])
		return console.log(
			`The is no icon called ${iconName} in this repo. Please refer to the readme`
		);

	return IconObj[iconName];
};

export default Icon;
