import React, { useState } from 'react';

import { Header } from './Header';
import './Page.css';
import { Card } from './Card';

type User = {
	name: string;
};

const descriptionProp =
	'Interfaces should not contain fjdsakl fdjsa lfuidfdsjfk dsajfdsajf';

const cardsData = [
	{
		tabIdx: 1,
		chip: 'Power BI',
		title: 'Power BI 101',
		desc: descriptionProp,
		img: 'img1',
		ext: 'jpg',
	},
	{
		tabIdx: 1,
		chip: 'Power Platform',
		title: 'Using Copilot with Word',
		desc: descriptionProp,
		img: 'img2',
		ext: 'jpg',
	},
	{
		tabIdx: 1,
		chip: 'Excel',
		title: 'Excel Favorite Tricks',
		desc: descriptionProp,
		img: 'img3',
		ext: 'jpg',
	},
];

export const Page: React.FC = () => {
	const [user, setUser] = useState<User>();
	const [darkMode, setDarkMode] = useState<boolean>(false);

	return (
		<article className={darkMode ? 'dark' : ''}>
			<Header
				user={user}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				onLogin={() => setUser({ name: 'Jane Doe' })}
				onLogout={() => setUser(undefined)}
				onCreateAccount={() => setUser({ name: 'Jane Doe' })}
			/>

			<section className='flex justify-center'>
				<div className='storybook-wrapper'>
					<div>
						<h6 className='storybook-page-header'>
							Latest Quick Hits
						</h6>
						<p className='word-break storybook-lead'>
							Previously Recorded Micro-
							<br className='sm:hidden' />
							learning
							<br className='xs:hidden sm:inline md:hidden' />{' '}
							Sessions
						</p>
					</div>
					<div className='storybook-cards-wrapper'>
						{cardsData.map((cardProps, index) => (
							<Card key={index} {...cardProps} locked={!user} />
						))}
					</div>
					<div
						className='flex gap-2'
						tabIndex={2}
						aria-label='Link to view more micro-learning'
					>
						<img src='/src/assets/tv.svg' alt='tv' />
						<p className='strong-default text-brandPrimary9'>
							View More Quick Hits
						</p>
					</div>
				</div>
			</section>
		</article>
	);
};
