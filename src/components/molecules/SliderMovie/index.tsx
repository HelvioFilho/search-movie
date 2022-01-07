import React from 'react';
import { Container, CustomImage, CustomText, IconButton } from '../../atoms';
import { SliderMovieProps } from '../../../utils/interface';
import { Touch } from './styles';

export function SliderMovie({ data, navigatePage }: SliderMovieProps) {
  return (

    <Container
      bg="bg"
      pb={16}
      pt={16}
    >
      <Touch activeOpacity={.7} onPress={() => navigatePage(data)} >
        <CustomImage
          CWidth="100%"
          CHeight={170}
          br={8}
          source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}` }}
          resizeMethod="resize"
        />
        <CustomText fontFamily="bold" pt={8} numberOfLines={1}>{data.title}</CustomText>
        <Container bg="bg" direction="row" align="center" >
          <IconButton ionicons="md-star" size={12} color="warning" />
          <CustomText pl={4} size={12} >{data.vote_average}/10</CustomText>
        </Container>
      </Touch>
    </Container>

  );
}