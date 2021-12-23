import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Icon } from './styles';
import { defaultTheme } from '../../../global';

export function IconButton({ ...props }) {
  const navigation = useNavigation<any>();

  return (
    <Icon onPress={() => navigation.openDrawer()} {...props}>
      <Feather
        name="menu"
        size={defaultTheme.metrics.px(36)}
        color={defaultTheme.colors.white}
      />
    </Icon>
  );
}