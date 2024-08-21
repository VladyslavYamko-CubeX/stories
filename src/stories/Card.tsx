import React from 'react';
import './button.css';
import ClockIcon from '../components/icons/Clock';
import LockIcon from '../components/icons/Lock';

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
			className='group max-w-[368px] h-[360px]  border border-neutral4 rounded-2xl shadow-blue-00 overflow-hidden  hover:shadow-blue-05 hover:cursor-pointer active:shadow-none  active:border-brandPrimary9 focus-visible:border-2 focus-visible:border-brandPrimary11 focus-visible:outline-none focus-visible:shadow-blue-05 dark:border-neutral10 dark:focus-visible:border-brandPrimary6'
		>
			<div className='h-40 max-h-40 overflow-hidden'>
				<img
					className='object-cover object-center w-full h-full'
					src={`/src/stories/assets/${img}.${ext}`}
					alt={img}
				/>
			</div>
			<div className='p-4 h-16 border border-brandSecondary3 flex items-center relative bg-[#FBFCFF] group-hover:bg-[#F6F8FF] group-active:bg-[#E8EFFF] group-focus:bg-[#F6F8FF] dark:bg-[#02021C] dark:border-brandSecondary10 dark:group-hover:bg-brandSecondary14 dark:group-focus:bg-brandSecondary14 dark:group-active:bg-brandSecondary13'>
				<h5 className='text-brandPrimary9 font-bold group-hover:text-brandPrimary11 group-hover:underline group-active:text-brandPrimary13 g group-focus-visible:text-brandPrimary11 group-focus-visible:underline dark:text-brandPrimary4 dark:group-hover:text-brandPrimary6 dark:group-focus:text-brandPrimary6 dark:group-active:text-brandPrimary8'>
					{title}
				</h5>

				<p className='font-montserrat absolute right-4 top-[-24px] border border-neutral4 text-neutralColored10 rounded-3xl bg-neutral2 px-[14px] py-1 font-bold flex gap-2 h-[30px] items-center shadow-secondary-01 dark:bg-neutral13 dark:text-neutralColored3 dark:border-neutral10'>
					{locked && (
						<LockIcon className='fill-neutralColored10 dark:fill-neutralColored3' />
					)}{' '}
					{chip}
				</p>
			</div>
			<div className='p-4 h-full bg-white group-hover:bg-neutralColored1 group-active:bg-brandPrimary2 group-focus:bg-neutralColored1 dark:bg-neutral15 dark:group-hover:bg-neutral17 dark:group-focus:bg-neutral17 dark:group-active:bg-brandPrimary11'>
				<span className='text-[13px] font-bold text-neutralColored9 dark:text-neutralColored5'>
					Description
				</span>
				<p className='line-clamp-2 text-neutralColored13 dark:text-neutralColored2'>
					{desc}
				</p>
				<div className='flex w-full justify-end gap-2 items-center'>
					<ClockIcon className='fill-neutralColored9 dark:fill-neutralColored5' />
					<p className='text-neutralColored10 dark:text-neutralColored3'>
						18m6s
					</p>
				</div>
			</div>
		</div>
	);
};
