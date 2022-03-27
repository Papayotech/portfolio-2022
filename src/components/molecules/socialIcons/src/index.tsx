import React from 'react';
import { Flex } from '../../../atoms/layout/src/index';

export const SocialIcons = () => {
  return (
    <Flex flexDirection="column">
      <i className="fa-brands fa-linkedin-in" />
      <i className="fa-brands fa-github-alt" />
      <i className="fa-brands fa-twitter" />
    </Flex>
  );
};

export default SocialIcons;
