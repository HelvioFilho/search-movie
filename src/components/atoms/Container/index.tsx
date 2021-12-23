import React from 'react';
import { ContainerProps } from '../../../utils/interface';
import { ContainerAll } from './styles';

export function Container({ children, ...props }: ContainerProps) {
  return (
    <ContainerAll
      {...props}
    >
      {children}
    </ContainerAll>
  );
}