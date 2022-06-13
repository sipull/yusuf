import * as React from 'react';

import Layout from '@/components/layout/Layout';
import HomePage from '@/components/pages/HomePage';
import Seo from '@/components/Seo';

export default function Home() {
  return (
    <Layout>
      <Seo templateTitle='Yusuf' />
      <HomePage />
    </Layout>
  );
}
