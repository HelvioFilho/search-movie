import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Icon } from './styles';
import { defaultTheme } from '../../../global';
import { IconProps } from '../../../utils/interface';

export function IconButton({ name, size, color, onPress, ...props }: IconProps) {

  return (
    <Icon
      onPress={onPress}
      {...props}
    >
      <Feather
        name={name}
        size={size}
        color={defaultTheme.colors[color || 'white']}
      />
    </Icon>
  );
}