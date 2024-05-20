import {useTheme} from "../context/ThemeContext.jsx";

const Main = () => {
	const [theme] = useTheme();

	return (
		<main className={`content-${theme}`}>
			<h1>テーマの切り替え</h1>
		</main>
	);
};

export default Main;
