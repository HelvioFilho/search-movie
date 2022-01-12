import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Container, CustomText } from '../../components';
import { MovieProps, stackParamList } from '../../utils/interface';
import { ActivityIndicator } from 'react-native';
import { defaultTheme } from '../../global';
import { api } from '../../services/api';

const { API_KEY } = process.env;

export function Search() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieProps[]>([] as MovieProps[]);

  const route = useRoute<RouteProp<stackParamList, 'Search'>>();

  useEffect(() => {
    let isActive = true;

    async function getSearchMovie() {
      const response = await api.get('/search/movie',
        {
          params: {
            query: route.params?.search,
            api_key: API_KEY,
            language: 'pt-BR',
            page: 1,
          }
        }
      );

      if (isActive) {
        setMovies(response.data.results);
        setLoading(false);
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
    }

  }, []);

  if (loading) {
    return (
      <Container
        flex={1}
        bg="bg"
        pt={4}
        pb={4}
        align="center"
        justify="center"
      >
        <ActivityIndicator size="large" color={defaultTheme.colors.white} />
      </Container>
    )
  }

  return (
    <Container
      bg="bg"
    >
      <CustomText>Página Search</CustomText>
    </Container>
  );
}