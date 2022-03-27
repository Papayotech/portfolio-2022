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
      <div >
        <SocialIcons />
          <ImageContainer imgURL={ProfileImage} />
      </div>
      <h1>{translation.hero.title}</h1>
      <h2>{translation.hero.profession}</h2>
      <p>{translation.hero.resume}</p>
      <ButtonComponent
        onClick={() => {
          darkMode.toggle();
        }}
        variant={VariantType.primary}
      >
        {translation.hero.callToAction}
      </ButtonComponent>

      {/* <select onChange={changeLanguage} defaultValue={locale}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select> */}
    </main>
  );
};

export default Home;
