import React from 'react';
import './button.css';
import ClockIcon from '../components/icons/Clock';
import LockIcon from '../components/icons/Lock';

import './Card.css';

export interface CardProps {
	tabIdx?: number;

	locked?: boolean;

	chip: string;

	title: string;

	desc: string;

	img: string;

	ext: string;

	onClick?: () => void;
}

export const Card = ({
	tabIdx = 1,
	locked = false,
	title,
	chip,
	desc,
	img,
	ext,
}: CardProps) => {
	const announcement = `Link to ${title}. Quick content about ${chip}. ${desc}. Length of 18 minutes 6 seconds`;

	return (
		<div
			tabIndex={tabIdx}
			aria-live='polite'
			aria-label={announcement}
			className='group storybook-card'
		>
			<div className='h-40 max-h-40 overflow-hidden'>
				<img
					className='object-cover object-center w-full h-full'
					src={`/src/stories/assets/${img}.${ext}`}
					alt={img}
				/>
			</div>
			<div className='storybook-title-container'>
				<h5 className='storybook-title'>{title}</h5>

				<p className='storybook-chip'>
					{locked && (
						<LockIcon className='fill-neutralColored10 dark:fill-neutralColored3' />
					)}
					{chip}
				</p>
			</div>
			<div className='storybook-desc-container'>
				<span className='strong-sm text-neutralColored9 dark:text-neutralColored5'>
					Description
				</span>
				<p className='paragraph-default line-clamp-2 text-neutralColored13 dark:text-neutralColored2'>
					{desc}
				</p>
				<div className='paragraph-default flex w-full justify-end gap-2 items-center'>
					<ClockIcon className='fill-neutralColored9 dark:fill-neutralColored5' />
					<p className='text-neutralColored10 dark:text-neutralColored3'>
						18m6s
					</p>
				</div>
			</div>
		</div>
	);
};
