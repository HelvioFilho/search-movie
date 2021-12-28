import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Icon } from './styles';
import { defaultTheme } from '../../../global';
import { IconProps } from '../../../utils/interface';

export function IconButton({ feather, ionicons, size, color, onPress, ...props }: IconProps) {

  return (
    <Icon
      onPress={onPress}
      {...props}
    >
      {feather &&
        <Feather
          name={feather}
          size={size}
          color={defaultTheme.colors[color || 'white']}
        />
      }
      {ionicons &&
        <Ionicons
          name={ionicons}
          size={size}
          color={defaultTheme.colors[color || 'white']}
        />
      }
    </Icon>
  );
}