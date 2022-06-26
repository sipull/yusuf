import styles from './index.module.scss';

import Accent from '@/components/pages/HomePage/AboutSection/Accent';

const AboutSection = () => {
  return (
    <section className={styles['about-section']}>
      <h1 className={styles['title']}>About Me 🤙</h1>
      <p className={styles['desc']}>
        A collection of visual graphic designs such as photography,
        <br className='hidden lg:block' />
        videography, cinematography, typography, and other graphic{' '}
        <br className='hidden lg:block' /> designs
      </p>
      {/* <Accent /> */}
      <Accent className='absolute -top-[300px] -right-[100px] hidden lg:block' />
      <Accent className='absolute -top-[300px] -left-[100px] hidden -rotate-180 scale-y-[-1] lg:block ' />
      <Accent className='absolute -bottom-[100px] -right-[100px] hidden lg:block' />
      <Accent className='absolute -bottom-[100px] -left-[100px] hidden -rotate-180 scale-y-[-1] lg:block ' />
    </section>
  );
};

export default AboutSection;
