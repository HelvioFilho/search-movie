import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Icon } from './styles';
import { defaultTheme } from '../../../global';
import { IconProps } from '../../../utils/interface';

export function IconButton({ name, onPress, ...props }: IconProps) {


  return (
    <Icon
      onPress={onPress}
      {...props}
    >
      <Feather
        name={name}
        size={defaultTheme.metrics.px(36)}
        color={defaultTheme.colors.white}
      />
    </Icon>
  );
}