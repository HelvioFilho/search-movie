import React from 'react';

import { CustomText, IconButton, Container } from '../../atoms';
import { TitleProps } from '../../../utils/interface';

export function Header({ title }: TitleProps) {

  return (
    <Container
      height={70}
      bg="bg"
      direction="row"
      align="center"
      pl={14}
    >
      <IconButton />
      <CustomText fontFamily="bold" size={30} ml={14}>{title}</CustomText>
    </Container>
  );
}