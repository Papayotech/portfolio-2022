import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import useDarkMode from 'use-dark-mode';
import ProfileImage from '../assets/images/rulo.jpg';

import {Flex, Box} from '../components/atoms/layout/src';
import {SocialIcons} from '../components/molecules/socialIcons/src/index';

import { ImageContainer } from '../components/atoms/imageContainer/src/index';
import en from '../../locales/en';
import es from '../../locales/es';
import { ButtonComponent, VariantType } from '../components/atoms/button/src';
import {PhotoAndSocial} from '../components/organisms/photoAndSocial/src/PhotoAndSocial';
import {ProfileDescription} from '../components/organisms/profileDescription/src/ProfileDescription';
import {HeroTemplate} from '../components/templates/hero/src/HeroTemplate';

const Home: NextPage = () => {
  const darkMode = useDarkMode(false);
  const router = useRouter();
  const { locale } = router;
  const translation = locale === 'en' ? en : es;

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push('/', '/', { locale });
  };

  return (
    <main>
      <HeroTemplate />

     

      

     
    </main>
  );
};

export default Home;
