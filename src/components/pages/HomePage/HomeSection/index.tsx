/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import me from 'public/images/me.png';
import Typed from 'react-typed';

import styles from './index.module.scss';

import ButtonDownloadCV from '@/components/ButtonDownloadCV';

const HomeSection = () => {
  return (
    <section className={styles['home-section']}>
      <div className='container-picture'>
        <img
          className='absolute top-36 left-0 animate-updown'
          src='/images/circle-1.png'
          alt=''
        />

        <img
          className='absolute top-72 left-0'
          src='/images/circle-3.png'
          alt=''
        />

        <img
          className='absolute bottom-20 right-0 z-10 animate-[updown_6s_linear_infinite] delay-1000'
          src='/images/circle-2.png'
          alt=''
        />

        <Image
          className='picture'
          src={me}
          height={597}
          width={342}
          alt='Me Picture'
        />
        <ButtonDownloadCV className='mt-10 inline-block md:hidden' />
      </div>
      <div className='container-text'>
        <h4 className='hello'>
          Hey There <span className='inline-block animate-waving-hand'>👋</span>
        </h4>
        <h1 className='name'>My Name is Yusuf</h1>

        <h6 className='profession'>
          <Typed
            strings={[
              'Profosional Visual Creative',
              'Profosional Video Creator',
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </h6>
      </div>
    </section>
  );
};

export default HomeSection;
