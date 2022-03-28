import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../../atoms/layout/src/index';


const StyledSocialIconContainer = styled.div`
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const SocialIcons = () => {
  return (
    <StyledSocialIconContainer>
      <Grid gridGap='8px' >
        <i className="fa-brands fa-linkedin-in" />
        <i className="fa-brands fa-github-alt" />
        <i className="fa-brands fa-twitter" />
      </Grid>
    </StyledSocialIconContainer>
  );
};
 
export default SocialIcons;
