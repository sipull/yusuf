import AboutSection from '@/components/pages/HomePage/AboutSection';

import HomeSection from './HomeSection';

const HomePage = () => {
  return (
    <div className='global-container bg-gray-50'>
      <div className='global-container__content'>
        <HomeSection />
        <AboutSection />
        {/* <GalerySection /> */}
      </div>
    </div>
  );
};

export default HomePage;
