import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ButtonComponent, VariantType } from '../../../atoms/button/src/index';

import en from '../../../../../locales/en';
import es from '../../../../../locales/es';
import { Grid } from '../../../atoms/layout/src';

const StyledProfileResume = styled.div`
  display: grid;
  grid-gap: 16px;

  h1 {
    font-size: 36px;

    span {
      margin-left: 8px;
      color: #ffc107;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
  }

  button {
      margin-top: 16px;
  }
`;

export const ProfileDescription = () => {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === 'en' ? en : es;

  return (
    <StyledProfileResume>
      <h1>
        {translation.hero.title}
        <span>{translation.hero.name}</span>
      </h1>
      <h2>{translation.hero.profession}</h2>
      <p>{translation.hero.resume}</p>
      <Grid gridTemplateColumns="180px 1fr">
          <ButtonComponent onClick={() => null} variant={VariantType.primary}>
            {translation.hero.callToAction}
          </ButtonComponent>
      </Grid>
    </StyledProfileResume>
  );
};

export default ProfileDescription;
