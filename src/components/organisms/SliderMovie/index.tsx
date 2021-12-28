import React from 'react';
import { CustomImage, CustomText } from '../..';

import { Container } from './styles';

export function SliderMovie() {
  return (
    <Container>
      <CustomImage
        source={{ uri: 'https://t.ctcdn.com.br/LgGjtcVIc3Z5KpC2RmjMNsop51k=/512x288/smart/i487836.jpeg' }}
        resizeMethod="resize"
      />
      <CustomText>Vingadores</CustomText>
    </Container>
  );
}