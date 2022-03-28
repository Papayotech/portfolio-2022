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
  color: #020202;
  border-radius: 8px ;
  font-size: 1em;
  padding: 16px 32px;
  outline: none;
  border: none;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) => (props.variant === VariantType.primary ? '#F3D00d' : 'white')};
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
