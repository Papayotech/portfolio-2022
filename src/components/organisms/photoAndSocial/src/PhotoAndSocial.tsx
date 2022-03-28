import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../../../assets/images/rulo.jpg';
import { GridItem } from '../../../atoms/layout/src/Grid';

import { ImageContainer } from '../../../atoms/imageContainer/src/index';

import { SocialIcons } from '../../../molecules/socialIcons/src/index';

const StyledPhotoAndSocialContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr 10%;
`;

const StyledProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
`;
export const PhotoAndSocial = () => {
  return (
    <StyledPhotoAndSocialContainer>
      <SocialIcons />
      <StyledProfilePhoto>
        <ImageContainer imgURL={ProfileImage} imgWidth="100%" />
      </StyledProfilePhoto>
    </StyledPhotoAndSocialContainer>
  );
};

export default PhotoAndSocial;
