import { StrictMode, useState, CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
	OptionType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);
	const [appliedState, setAppliedState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleChange = (key: keyof ArticleStateType, option: OptionType) => {
		setArticleState((prev) => ({
			...prev,
			[key]: option, // сохраняем целый объект OptionType
		}));
	};

	const handleApply = () => {
		setAppliedState(articleState);
		setIsSidebarOpen(false);
	};

	const handleReset = () => {
		setArticleState(defaultArticleState);
		setAppliedState(defaultArticleState);
		setIsSidebarOpen(false);
	};

	const cssVars = {
		'--font-family': appliedState.fontFamilyOption.value,
		'--font-size': appliedState.fontSizeOption.value,
		'--font-color': appliedState.fontColor.value,
		'--container-width': appliedState.contentWidth.value,
		'--bg-color': appliedState.backgroundColor.value,
	} as CSSProperties;

	return (
		<div className={clsx(styles.main)} style={cssVars}>
			<ArticleParamsForm
				isOpen={isSidebarOpen}
				onToggle={() => setIsSidebarOpen((prev) => !prev)}
				onChange={handleChange}
				onApply={handleApply}
				onReset={handleReset}
				currentState={articleState}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
