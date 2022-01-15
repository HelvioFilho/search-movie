import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationProp, useNavigation, useIsFocused } from '@react-navigation/native';
import { Container, CustomText, FavoriteItem, Header } from '../../components';

import { MovieProps, stackParamList } from '../../utils/interface';
import { defaultTheme } from '../../global';
import { useFavorite } from '../../services';
import { FlatFavorite } from './styles';

export function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const { removeFavorites, getFavorites } = useFavorite();
  const navigation = useNavigation<NavigationProp<stackParamList>>();
  const isFocused = useIsFocused();

  async function getFavoritesMovies() {
    const response = await getFavorites();
    setMovies(response);
  }

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      getFavoritesMovies();
      setLoading(false);
    }

    return () => {
      isActive = false;
    }

  }, [isFocused]);

  function navigateDetailsPage(movie: MovieProps) {
    navigation.navigate('Detail', { id: movie.id, return: 'Movies' })
  }

  async function handleDeleteFavorite(movie: MovieProps) {
    await removeFavorites(`${movie.id}${movie.title}`);
    getFavoritesMovies();
  }

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
      flex={1}
      bg="bg"
      align="stretch"
      pt={4}
      pb={4}
    >
      <Header title="Minha lista" />
      {movies.length > 0 ?
        <FlatFavorite
          data={movies}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) =>
            <FavoriteItem
              data={item}
              delMovie={() => handleDeleteFavorite(item)}
              navigatePage={() => navigateDetailsPage(item)}
            />}
        />
        :
        <CustomText
          size={18}
          align="center"
          pl={40}
          pr={40}
          mt={30}
          lineHeight={22}
        >Você ainda não adicionou {'\n'} nenhum filme a sua lista!</CustomText>
      }
    </Container>
  );
}