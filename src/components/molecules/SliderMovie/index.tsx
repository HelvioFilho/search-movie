import React from 'react';
import { Container, CustomImage, CustomText, IconButton } from '../..';
import { Touch } from './styles';

export function SliderMovie() {
  return (

    <Container
      bg="bg"
      pb={16}
      pt={16}
    >
      <Touch activeOpacity={.7} >
        <CustomImage
          CWidth="100%"
          CHeight={170}
          br={8}
          source={{ uri: 'https://t.ctcdn.com.br/LgGjtcVIc3Z5KpC2RmjMNsop51k=/512x288/smart/i487836.jpeg' }}
          resizeMethod="resize"
        />
        <CustomText fontFamily="bold" pt={8} numberOfLines={1}>Vingadores Vingadores Vingadores Vingadores</CustomText>
        <Container bg="bg" direction="row" align="center" >
          <IconButton ionicons="md-star" size={12} color="warning" />
          <CustomText pl={4} size={12} >9/10</CustomText>
        </Container>
      </Touch>
    </Container>

  );
}