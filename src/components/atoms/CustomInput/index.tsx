import React from 'react';
import { TextInputProps } from 'react-native';
import { defaultTheme } from '../../../global';

import { Input, InputContainer } from './styles';

export function CustomInput({ children, ...props }: TextInputProps) {
  return (
    <InputContainer>
      <Input
        placeholderTextColor={defaultTheme.colors.input}
        {...props}
      />
      {children}
    </InputContainer>
  );
}