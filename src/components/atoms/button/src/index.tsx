import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

export enum VariantType {
  primary = 'primary',
  secondary = 'scondary',
}

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: VariantType;
}
interface StyleProps {
  readonly isActive?: boolean;
  variant: VariantType;
}
const StyledButton = styled.button<StyleProps>`
  background: ${(props) => (props.isActive ? 'palevioletred' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'palevioletred')};
  margin: 1em;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => (props.variant === VariantType.primary ? 'blue' : 'white')};
`;

export const ButtonComponent = React.forwardRef<HTMLButtonElement, IProps>((props) => {
  const { children, variant, ...buttonProps } = props;

  return (
    <StyledButton variant={variant} {...buttonProps}>
      {children}
    </StyledButton>
  );
});

export default ButtonComponent;
