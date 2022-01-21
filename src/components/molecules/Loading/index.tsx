import React from 'react';
import { Container, CustomText } from '../../atoms';
import LottieView from 'lottie-react-native';
import loadAnimation from '../../../assets/load.json';
import { defaultTheme } from '../../../global';

export function Loading() {
  return (
    <Container
      flex={1}
      bg="bg"
      pt={4}
      pb={4}
      align="center"
      justify="center"
    >
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{ backgroundColor: 'transparent', width: defaultTheme.metrics.px(200) }}
      />
    </Container>
  );
}