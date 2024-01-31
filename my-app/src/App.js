import logo from './logo.svg'; // раздел импортов
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const date = new Date(); // императивный стиль
	// ниже идёт декларативный стиль
	return createElement(
		'div',
		{
			className: 'App',
		},
		createElement(
			'header',
			{
				className: 'App-header',
			},
			createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			createElement('a', {}, 'Learn React'),
		),
		createElement(
			'footer',
			{
				className: 'App-footer',
			},
			`${date.getFullYear()} год`,
		),
	);
};
