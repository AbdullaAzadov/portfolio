import { FC } from 'react';
import { clsx } from 'clsx';

type IconLogoProps = {
  isActive: boolean;
  className?: string;
  onClick?: () => void;
};

export const IconLogo: FC<IconLogoProps> = ({
  isActive,
  className = '',
  onClick = () => {},
}) => {
  const color = isActive ? '#F35034' : '#ccc';
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsx('cursor-pointer', className)}
      onClick={onClick}
    >
      <path
        d='M0.403442 8.44149C0.403442 6.98734 1.58227 5.80851 3.03642 5.80851C4.49058 5.80851 5.6694 6.98734 5.6694 8.44149C5.6694 9.89564 4.49058 11.0745 3.03642 11.0745C1.58227 11.0745 0.403442 9.89564 0.403442 8.44149Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M0.403442 14C0.403442 12.5458 1.58227 11.367 3.03642 11.367C4.49058 11.367 5.6694 12.5458 5.6694 14C5.6694 15.4542 4.49058 16.633 3.03642 16.633C1.58227 16.633 0.403442 15.4542 0.403442 14Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M0.403442 19.5585C0.403442 18.1044 1.58227 16.9255 3.03642 16.9255C4.49058 16.9255 5.6694 18.1044 5.6694 19.5585C5.6694 21.0127 4.49058 22.1915 3.03642 22.1915C1.58227 22.1915 0.403442 21.0127 0.403442 19.5585Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M5.96195 2.88298C5.96195 1.42882 7.14078 0.25 8.59493 0.25C10.0491 0.25 11.2279 1.42882 11.2279 2.88298C11.2279 4.33713 10.0491 5.51596 8.59493 5.51596C7.14078 5.51596 5.96195 4.33713 5.96195 2.88298Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M5.96195 8.44149C5.96195 6.98734 7.14078 5.80851 8.59493 5.80851C10.0491 5.80851 11.2279 6.98734 11.2279 8.44149C11.2279 9.89564 10.0491 11.0745 8.59493 11.0745C7.14078 11.0745 5.96195 9.89564 5.96195 8.44149Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M5.96195 14C5.96195 12.5458 7.14078 11.367 8.59493 11.367C10.0491 11.367 11.2279 12.5458 11.2279 14C11.2279 15.4542 10.0491 16.633 8.59493 16.633C7.14078 16.633 5.96195 15.4542 5.96195 14Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M5.96195 19.5585C5.96195 18.1044 7.14078 16.9255 8.59493 16.9255C10.0491 16.9255 11.2279 18.1044 11.2279 19.5585C11.2279 21.0127 10.0491 22.1915 8.59493 22.1915C7.14078 22.1915 5.96195 21.0127 5.96195 19.5585Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M5.96195 25.117C5.96195 23.6629 7.14078 22.484 8.59493 22.484C10.0491 22.484 11.2279 23.6629 11.2279 25.117C11.2279 26.5712 10.0491 27.75 8.59493 27.75C7.14078 27.75 5.96195 26.5712 5.96195 25.117Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M11.5205 2.88298C11.5205 1.42882 12.6993 0.25 14.1534 0.25C15.6076 0.25 16.7864 1.42882 16.7864 2.88298C16.7864 4.33713 15.6076 5.51596 14.1534 5.51596C12.6993 5.51596 11.5205 4.33713 11.5205 2.88298Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M11.5205 8.44149C11.5205 6.98734 12.6993 5.80851 14.1534 5.80851C15.6076 5.80851 16.7864 6.98734 16.7864 8.44149C16.7864 9.89564 15.6076 11.0745 14.1534 11.0745C12.6993 11.0745 11.5205 9.89564 11.5205 8.44149Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M11.5205 14C11.5205 12.5458 12.6993 11.367 14.1534 11.367C15.6076 11.367 16.7864 12.5458 16.7864 14C16.7864 15.4542 15.6076 16.633 14.1534 16.633C12.6993 16.633 11.5205 15.4542 11.5205 14Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M11.5205 19.5585C11.5205 18.1044 12.6993 16.9255 14.1534 16.9255C15.6076 16.9255 16.7864 18.1044 16.7864 19.5585C16.7864 21.0127 15.6076 22.1915 14.1534 22.1915C12.6993 22.1915 11.5205 21.0127 11.5205 19.5585Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M11.5205 25.117C11.5205 23.6629 12.6993 22.484 14.1534 22.484C15.6076 22.484 16.7864 23.6629 16.7864 25.117C16.7864 26.5712 15.6076 27.75 14.1534 27.75C12.6993 27.75 11.5205 26.5712 11.5205 25.117Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M17.079 2.88298C17.079 1.42882 18.2578 0.25 19.712 0.25C21.1661 0.25 22.3449 1.42882 22.3449 2.88298C22.3449 4.33713 21.1661 5.51596 19.712 5.51596C18.2578 5.51596 17.079 4.33713 17.079 2.88298Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M17.079 8.44149C17.079 6.98734 18.2578 5.80851 19.712 5.80851C21.1661 5.80851 22.3449 6.98734 22.3449 8.44149C22.3449 9.89564 21.1661 11.0745 19.712 11.0745C18.2578 11.0745 17.079 9.89564 17.079 8.44149Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M17.079 14C17.079 12.5458 18.2578 11.367 19.712 11.367C21.1661 11.367 22.3449 12.5458 22.3449 14C22.3449 15.4542 21.1661 16.633 19.712 16.633C18.2578 16.633 17.079 15.4542 17.079 14Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M17.079 19.5585C17.079 18.1044 18.2578 16.9255 19.712 16.9255C21.1661 16.9255 22.3449 18.1044 22.3449 19.5585C22.3449 21.0127 21.1661 22.1915 19.712 22.1915C18.2578 22.1915 17.079 21.0127 17.079 19.5585Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M17.079 25.117C17.079 23.6629 18.2578 22.484 19.712 22.484C21.1661 22.484 22.3449 23.6629 22.3449 25.117C22.3449 26.5712 21.1661 27.75 19.712 27.75C18.2578 27.75 17.079 26.5712 17.079 25.117Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M22.6375 8.44149C22.6375 6.98734 23.8163 5.80851 25.2705 5.80851C26.7246 5.80851 27.9034 6.98734 27.9034 8.44149C27.9034 9.89564 26.7246 11.0745 25.2705 11.0745C23.8163 11.0745 22.6375 9.89564 22.6375 8.44149Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M22.6375 14C22.6375 12.5458 23.8163 11.367 25.2705 11.367C26.7246 11.367 27.9034 12.5458 27.9034 14C27.9034 15.4542 26.7246 16.633 25.2705 16.633C23.8163 16.633 22.6375 15.4542 22.6375 14Z'
        fill={color}
        className='transition-all'
      />
      <path
        d='M22.6375 19.5585C22.6375 18.1044 23.8163 16.9255 25.2705 16.9255C26.7246 16.9255 27.9034 18.1044 27.9034 19.5585C27.9034 21.0127 26.7246 22.1915 25.2705 22.1915C23.8163 22.1915 22.6375 21.0127 22.6375 19.5585Z'
        fill={color}
        className='transition-all'
      />
    </svg>
  );
};