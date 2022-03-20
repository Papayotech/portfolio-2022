import React from 'react';
import type { NextPage } from 'next';
import { ButtonComponent, VariantType } from '../components/atoms/button/src';

const Home: NextPage = () => {
  return (
    <div>
      <h1>welcome to cypress</h1>
      <ButtonComponent variant={VariantType.primary}>click here</ButtonComponent>
    </div>
  );
};

export default Home;
