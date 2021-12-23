import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CustomText, IconButton, Container } from '../../atoms';
import { TitleProps } from '../../../utils/interface';

export function Header({ title }: TitleProps) {
  const navigation = useNavigation<any>();

  return (
    <Container
      height={70}
      bg="bg"
      direction="row"
      align="center"
      pl={14}
    >
      <IconButton
        name="menu"
        onPress={() => navigation.openDrawer()}
      />
      <CustomText
        fontFamily="bold"
        size={30}
        ml={14}
      >
        {title}
      </CustomText>
    </Container>
  );
}