import {
	OptionType,
	ArticleStateType,
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
} from '../../constants/articleProps';
import { ArrowButton } from '../arrow-button/ArrowButton';
import { Button } from '../button/Button';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { Text } from 'components/text';
import { Spacing } from 'components/spacing';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

interface Props {
	isOpen: boolean;
	onToggle: () => void;
	onChange: (key: keyof ArticleStateType, value: OptionType) => void;
	onApply: () => void;
	onReset: () => void;
	currentState: ArticleStateType;
}

export const ArticleParamsForm = ({
	isOpen,
	onToggle,
	onChange,
	onApply,
	onReset,
	currentState,
}: Props) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply();
	};

	const handleReset = () => {
		onReset();
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onToggle} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Spacing size={72} />
					<Select
						selected={currentState.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder='Выберите шрифт'
						title='Шрифт'
						onChange={(option) => onChange('fontFamilyOption', option)}
					/>
					<Spacing size={30} />
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={currentState.fontSizeOption}
						onChange={(option) => onChange('fontSizeOption', option)}
						title='Размер шрифта'
					/>
					<Spacing size={30} />
					<Separator />
					<Spacing size={30} />
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={currentState.fontColor}
						onChange={(option) => onChange('fontColor', option)}
						placeholder='Выберите цвет'
					/>
					<Spacing size={30} />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={currentState.backgroundColor}
						onChange={(option) => onChange('backgroundColor', option)}
						placeholder='Выберите цвет фона'
					/>
					<Spacing size={30} />
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={currentState.contentWidth}
						onChange={(option) => onChange('contentWidth', option)}
						placeholder='Выберите ширину'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='button' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
