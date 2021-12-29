import React from 'react';
import { CustomTextProps } from '../../../utils/interface';

import { Text } from './styles';

export function CustomText({ children, ...props }: CustomTextProps) {
  return (
    <Text {...props}>
      {children}
    </Text>
  );
}