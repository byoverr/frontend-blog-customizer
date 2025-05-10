import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

// Описание метаданных для Storybook
const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

// История для компонента ArrowButton
export const ArrowButtonStory: Story = {
	render: (args) => {
		// В args будут переданы пропсы из Storybook
		return <ArrowButton {...args} />;
	},
	// Передаем начальные пропсы для компонента
	args: {
		isOpen: false, // Начальное значение состояния кнопки
		onClick: () => alert('ArrowButton clicked!'), // Функция, которая вызывается при клике
	},
};
