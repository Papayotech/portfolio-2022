import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from "next/router"
import useDarkMode from 'use-dark-mode';
import en from '../../locales/en';
import es from '../../locales/es';
import { ButtonComponent, VariantType } from '../components/atoms/button/src';

const Home: NextPage = () => {
  const darkMode = useDarkMode(false);
  const router = useRouter();
  const {locale} = router
  const translation = locale === 'en' ? en : es

  const changeLanguage = (e:any) => {
    const locale = e.target.value
    router.push('/','/', {locale})
  }

  return (
    <div>
      <h1>{translation.hero}</h1>
      <ButtonComponent onClick={()=> {
        darkMode.toggle()
      }} variant={VariantType.primary}>
        click here
      </ButtonComponent>

      <select onChange={changeLanguage} defaultValue={locale}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default Home;
