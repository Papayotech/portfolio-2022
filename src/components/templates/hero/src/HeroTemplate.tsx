import React from 'react'
import styled from 'styled-components';
import { Box } from '../../../atoms/layout/src';

import {PhotoAndSocial} from '../../../organisms/photoAndSocial/src/PhotoAndSocial'
import {ProfileDescription} from '../../../organisms/profileDescription/src/ProfileDescription'


const StyledHero = styled.section`
  margin-top: 44px;
  
`;
export const HeroTemplate = () => {
  return (
    <StyledHero>
         <Box marginBottom='32px'>
             <PhotoAndSocial />
         </Box>

<ProfileDescription />
    </StyledHero>
  )
}

export default HeroTemplate