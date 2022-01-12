import React from 'react';
import { SliderMovieProps } from '../../../utils/interface';
import { CustomImage, CustomText, Container, IconButton } from '../../atoms';
import { SearchSelect } from './styles';

export function SlideSearch({ data, navigatePage }: SliderMovieProps) {

  return (
    <SearchSelect onPress={() => navigatePage(data)}>
      {data.poster_path ? (
        <>
          <CustomImage
            resizeMethod="resize"
            source={{ uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}` }}
            CWidth="100%"
            CHeight={140}
            br={8}
          />
        </>
      ) : (
        <CustomImage
          resizeMethod="resize"
          source={require('../../../assets/semfoto.png')}
          CWidth="100%"
          CHeight={140}
          br={8}
        />
      )}
      <CustomText fontFamily="bold" size={18} pt={10} numberOfLines={1}>{data.title}</CustomText>
      <Container bg="bg" direction="row" align="center" justify="space-between">
        <Container bg="bg" direction="row" mt={5} align="center">
          <IconButton ionicons="md-star" size={12} color="warning" />
          <CustomText pl={4} size={12} >{data.vote_average}/10</CustomText>
        </Container>
        <CustomText>Lançamento: {data.release_date.split('-').reverse().join('/')}</CustomText>
      </Container>
    </SearchSelect>
  );
}