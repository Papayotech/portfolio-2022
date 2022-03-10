import React, { useState } from 'react';
import styled from 'styled-components';

interface buttonProps {
  readonly isActive?: boolean;
}
const Button = styled.button<buttonProps>`
  background: ${(props) => (props.isActive ? 'palevioletred' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const ButtonComponent: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Button isActive={active} onClick={() => setActive(!active)}>
      hola click here
    </Button>
  );
};

export default ButtonComponent;
