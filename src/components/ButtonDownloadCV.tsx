import clsx from 'clsx';
import { FC } from 'react';

const ButtonDownloadCV: FC<{ className?: string }> = ({ className }) => {
  return (
    <button
      className={clsx(
        'rounded-lg bg-blue-500 py-3 px-3 font-medium text-white',
        className
      )}
    >
      Download CV
    </button>
  );
};

export default ButtonDownloadCV;
