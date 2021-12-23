import React from 'react';
import { TextProps } from '../../../utils/interface';

import { Text } from './styles';

export function CustomText({ children, ...props }: TextProps) {
  return (
    <Text {...props}>
      {children}
    </Text>
  );
}