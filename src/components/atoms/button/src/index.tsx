import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';



export enum VariantType {
  primary = 'primary',
  secondary = 'scondary',
}


interface IProps {
  children: ReactNode;
  variant: VariantType
}
interface StyleProps {
  readonly isActive?: boolean;
  variant: VariantType
}
const Button = styled.button<StyleProps>`
  background: ${(props) => (props.isActive ? 'palevioletred' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'palevioletred')};
  margin: 1em;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: ${(props) => (props.variant === VariantType.primary ? 'blue' : 'white')} ;
`;

export const ButtonComponent: React.FC<IProps> = ({ children, variant }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Button variant={variant} isActive={active} onClick={() => setActive(!active)}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
