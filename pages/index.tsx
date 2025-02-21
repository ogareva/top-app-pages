import { Button, Htag } from '../components';
import React from 'react';


export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow="right">Кнопка</Button>
			<Button appearance='ghost' arrow="down">Кнопка</Button>
		</>
	);
}