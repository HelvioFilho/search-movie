import React, { useEffect, useState } from 'react';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Container, CustomText, SlideSearch } from '../../components';
import { MovieProps, stackParamList } from '../../utils/interface';
import { ActivityIndicator } from 'react-native';
import { defaultTheme } from '../../global';
import { api } from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';

const { API_KEY } = process.env;

export function Search() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieProps[]>([] as MovieProps[]);

  const route = useRoute<RouteProp<stackParamList, 'Search'>>();
  const navigation = useNavigation<NavigationProp<stackParamList>>();

  function navigateDetailsPage(movie: MovieProps) {
    navigation.navigate('Detail', { id: movie.id, return: 'Search' });
  }

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
      align="stretch"
      height="100%"
    >
      {movies.length > 0 ?
        <FlatList
          data={movies}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SlideSearch data={item} navigatePage={() => navigateDetailsPage(item)} />}
        />
        :
        <CustomText
          size={18}
          align="center"
          pl={40}
          pr={40}
          mt={30}
          lineHeight={22}
        >
          Nenhum filme foi encontrado! {'\n'}
          Verifique a ortografia ou tente {'\n'}
          buscar por outro filme!
        </CustomText>
      }
    </Container>
  );
}