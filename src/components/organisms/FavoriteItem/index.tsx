import React from 'react';
import { SearchListProps } from '../../../utils/interface';
import { Container, CustomText, CustomImage, IconButton } from '../../atoms';
import { Ionicons } from '@expo/vector-icons';
import { DetailButton } from './styles';
import { defaultTheme } from '../../../global';

export function FavoriteItem({ data, navigatePage, delMovie }: SearchListProps) {
  return (
    <Container
      bg="bg"
      align="stretch"
      mt={10}
      mb={10}
    >
      <Container
        bg="bg"
        direction="row"
        pb={16}
        pt={16}
        pl={8}
      >
        <CustomImage
          CWidth="40%"
          CHeight={200}
          br={12}
          source={{ uri: `https://image.tmdb.org/t/p/original${data.poster_path}` }}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <Container
          bg="bg"
          width="60%"
          height={190}
          pl={5}
          pr={5}
          justify="center"
        >
          <CustomText size={16} fontFamily="bold" pt={8} numberOfLines={3}>{data.title}</CustomText>
          <Container bg="bg" direction="row" align="center" pt={8} pb={8}>
            <IconButton ionicons="md-star" size={14} color="warning" />
            <CustomText pl={4} size={14} >{data.vote_average}/10</CustomText>
          </Container>
          <CustomText>Lançamento: {data.release_date.split('-').reverse().join('/')}</CustomText>
        </Container>
      </Container>
      <Container
        bg="bg"
        direction="row"
        align="center"
        ml={14}
        mr={14}
        justify="space-between"
      >
        <DetailButton activeOpacity={.8} onPress={() => navigatePage(data)}>
          <CustomText size={14}>Ver detalhes </CustomText>
          <Ionicons name="add-circle" size={18} color={defaultTheme.colors.white} />
        </DetailButton>
        <DetailButton activeOpacity={.8} onPress={() => delMovie(data)}>
          <CustomText size={14}>Apagar </CustomText>
          <Ionicons name="trash" size={18} color={defaultTheme.colors.white} />
        </DetailButton>
      </Container>
    </Container>
  );
}