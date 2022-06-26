import { FC } from 'react';

const Accent: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width='225'
      height='684'
      viewBox='0 0 225 684'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect
        width='108.525'
        height='35.6283'
        rx='17.8142'
        transform='matrix(-0.707107 0.707107 0.707107 0.707107 184.667 283.999)'
        fill='#F3F4F6'
      />
      <rect
        width='378.937'
        height='35.6283'
        rx='17.8142'
        transform='matrix(-0.707107 0.707107 0.707107 0.707107 268.666 92.9995)'
        fill='#F3F4F6'
      />
      <rect
        width='378.937'
        height='35.6283'
        rx='17.8142'
        transform='matrix(-0.707107 0.707107 0.707107 0.707107 311.666 389.998)'
        fill='#F3F4F6'
      />
      <rect
        width='378.937'
        height='35.6283'
        rx='17.8142'
        transform='matrix(-0.707107 0.707107 0.707107 0.707107 477.665 0)'
        fill='#F3F4F6'
      />
    </svg>
  );
};

export default Accent;
