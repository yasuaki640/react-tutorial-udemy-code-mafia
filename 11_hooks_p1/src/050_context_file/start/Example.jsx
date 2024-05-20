import "./Example.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import {ThemeProvider} from "./context/ThemeContext.jsx";

const Example = () => {
	return (
		<ThemeProvider>
			<Header />
			<Main />
		</ThemeProvider>
	);
};

export default Example;
