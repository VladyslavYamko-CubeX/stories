import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import './page.css';
import { Card } from './Card';

type User = {
	name: string;
};

const descriptionProp =
	'Interfaces should not contain fjdsakl fdjsa lfuidfdsjfk dsajfdsajf';

export const Page: React.FC = () => {
	const [user, setUser] = useState<User>();
	const [darkMode, setDarkMode] = useState<boolean>(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 1248);
		};

		window.addEventListener('resize', checkScreenSize);
		checkScreenSize();

		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

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
				<div className='xs:px-6 xs:pt-12 flex flex-col xs:gap-2'>
					<div>
						<h6 className='font-bold text-neutralColored10 sm:text-xl md:text-base xl:text-xl'>
							Latest Quick Hits
						</h6>
						<p className='word-break text-neutralColored9 sm:text-xl md:hidden xl:inline'>
							Previously Recorded Micro-
							<br className='sm:hidden' />
							learning
							<br className='xs:hidden sm:inline md:hidden' />{' '}
							Sessions
						</p>
					</div>
					<div className='flex flex-col xs:gap-6 w-fit md:flex-row xl:gap-12'>
						<Card
							tabIdx={1}
							locked={!user}
							chip='Power BI'
							title='Power BI 101'
							desc={descriptionProp}
							img='img1'
							ext='jpg'
						/>
						<Card
							tabIdx={1}
							locked={!user}
							chip='Power Platform'
							title='Using Copilot with Word'
							desc={descriptionProp}
							img='img2'
							ext='jpg'
						/>
						{!isSmallScreen && (
							<Card
								tabIdx={1}
								locked={!user}
								chip='Excel'
								title='Excel Favorite Tricks'
								desc={descriptionProp}
								img='img3'
								ext='jpg'
							/>
						)}
					</div>
					<div
						className='flex gap-2'
						tabIndex={2}
						aria-label='Link to view more micro-learning'
					>
						<img src='/src/assets/tv.svg' alt='tv' />
						<p className='font-bold text-brandPrimary9'>
							View More Quick Hits
						</p>
					</div>
				</div>
			</section>
		</article>
	);
};
