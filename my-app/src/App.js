import logo from './logo.svg'; // раздел импортов
import './App.css';

export const App = () => {
	const date = new Date(); // императивный стиль
	// ниже идёт декларативный стиль
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<footer className="App-footer">{`${date.getFullYear()} год`}</footer>
		</div>
	);
};
