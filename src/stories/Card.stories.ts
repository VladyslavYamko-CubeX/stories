import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
	component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unlocked: Story = {
	args: {
		locked: false,
		chip: 'Power BI',
		title: 'Power BI 101',
		desc: 'Interfaces should not contain fjdsakl fdjsa lfuidfdsjfk dsajfdsajf',

		img: 'accessibility',
		ext: 'png',
	},
};

export const Locked: Story = {
	args: {
		locked: true,
		chip: 'Power BI',
		title: 'Power BI 101',
		desc: 'Interfaces should not contain fjdsakl fdjsa lfuidfdsjfk dsajfdsajf',

		img: 'accessibility',
		ext: 'png',
	},
};
