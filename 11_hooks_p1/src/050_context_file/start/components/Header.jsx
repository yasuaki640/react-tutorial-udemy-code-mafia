import {useTheme} from "../context/ThemeContext.jsx";

const Header = () => {
	const [theme, setTheme] = useTheme();

	const changeTheme = (e) => setTheme(e.target.value);

	const THEMES = ["light", "dark", "red"];

	return (
		<header className={`content-${theme}`}>
			{THEMES.map((t) => (
				<label key={t}>
					<input
						type="radio"
						value={t}
						checked={theme === t}
						onChange={changeTheme}
					/>
					{t}
				</label>
			))}
		</header>
	);
};

export default Header;
