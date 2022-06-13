import clsx from 'clsx';
import Image from 'next/image';
import Logo from 'public/images/logo-text.png';
import * as React from 'react';

import styles from './index.module.scss';

import ButtonDownloadCV from '@/components/ButtonDownloadCV';

const links = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'About' },
  { href: '/', label: 'Galery' },
];

export default function Header() {
  return (
    <header className={clsx(styles['header'], 'global-cotainer')}>
      <div
        className={clsx('header__content', 'global-container__content layout')}
      >
        <Image src={Logo} alt='Logo' />
        <nav className='hidden md:block'>
          <ul className='flex items-center justify-between space-x-10 font-bold text-gray-500'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>{label}</li>
            ))}
          </ul>
        </nav>
        <div>
          <ButtonDownloadCV className='hidden md:inline-block' />
        </div>
      </div>
    </header>
  );
}
