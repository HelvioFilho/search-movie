import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { NavigationProp, useNavigation, useIsFocused } from '@react-navigation/native';
import { Container, CustomText, FavoriteItem, Header, Loading, ModalAlert } from '../../components';

import { MovieProps, stackParamList } from '../../utils/interface';
import { useFavorite } from '../../services';
import { FlatFavorite } from './styles';

export function Movies() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [idMovie, setIdMovie] = useState('');
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const { removeFavorites, getFavorites } = useFavorite();
  const navigation = useNavigation<NavigationProp<stackParamList>>();
  const isFocused = useIsFocused();

  async function getFavoritesMovies() {
    const response = await getFavorites();
    setMovies(response);
    setLoading(false);
  }

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      getFavoritesMovies();
    }

    return () => {
      isActive = false;
    }

  }, [isFocused]);

  function navigateDetailsPage(movie: MovieProps) {
    navigation.navigate('Detail', { id: movie.id, return: 'Movies' })
  }

  async function delFavoriteMovie() {
    await removeFavorites(idMovie);
    setAlertMessage("Filme removido dos favoritos com sucesso!");
    setVisible(true);
    setChoice(false);
    getFavoritesMovies();
  }

  async function handleDeleteFavorite(movie: MovieProps) {
    setIdMovie(`${movie.id}${movie.title}`);
    setAlertMessage("Tem certeza que deseja remover esse filme da lista?");
    setChoice(true);
    setVisible(true);
  }

  if (loading) {
    return (
      <Loading />
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
      {movies.length > 0 && loading === false ?
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
      >
        <ModalAlert
          alertMessage={alertMessage}
          choice={choice}
          closeModal={() => {
            setVisible(false);
            setAlertMessage('');
            setIdMovie('');
          }}
          delFavoriteModal={() => delFavoriteMovie()}
        />
      </Modal>
    </Container>
  );
}