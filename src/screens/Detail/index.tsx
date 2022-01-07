import React, { useEffect, useState } from 'react';
import { Container, CustomImage, CustomText, IconButton } from '../../components';
import { HeaderDetail } from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../services/api';
const { API_KEY } = process.env;

import { MovieProps, stackParamList } from '../../utils/interface';

export function Detail() {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<stackParamList>>();

  const [movie, setMovie] = useState<MovieProps>({} as MovieProps);

  useEffect(() => {
    let isActive = true;

    async function getMovie() {
      const response = await api.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: API_KEY,
          language: 'pt-BR',
        }
      });

      if (isActive) {
        setMovie(response.data);
      }
    }

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    }
  }, [])

  return (
    <Container
      flex={1}
      bg="bg"
      pt={4}
      pb={4}
    >
      <HeaderDetail>
        <IconButton
          onPress={() => navigation.goBack()}
          feather="arrow-left"
          size={28}
          color="white"
          width={46}
          height={46}
          bg="bgIcon"
          br={23}
          justify="center"
          align="center"
        />
        <IconButton
          ionicons="bookmark"
          size={28}
          color="white"
          width={46}
          height={46}
          bg="bgIcon"
          br={23}
          justify="center"
          align="center" />
      </HeaderDetail>
      <CustomImage
        resizeMethod="resize"
        source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
        CWidth="100%"
        CHeight={350}
        bblr={50}
        bbrr={50}
      />
      <IconButton
        feather="link"
        size={28}
        color="white"
        bg="cta"
        width={63}
        height={63}
        br={35}
        justify="center"
        align="center"
        redBottom={true}
      />
      <CustomText
        numberOfLines={2}
        size={22}
        fontFamily="bold"
        pt={8}
        pb={8}
        pl={14}
        pr={14}
        mt={12}
      >{movie.title}</CustomText>
    </Container>
  );
}