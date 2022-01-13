import React, { useEffect, useState } from 'react';
import { Container, CustomImage, CustomText, Genres, IconButton, ModalLink, StarIcon } from '../../components';
import { HeaderDetail, ListGenres } from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { api } from '../../services/api';
const { API_KEY } = process.env;
import { MovieProps, stackParamList } from '../../utils/interface';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Modal } from 'react-native';
import { defaultTheme } from '../../global';
import { useFavorite } from '../../services';

export function Detail() {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<stackParamList, 'Detail'>>();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps);
  const [visible, setVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addFavorites, removeFavorites, getFavorites } = useFavorite();

  async function handleAddFavorite() {
    await addFavorites(movie);
    checkIsFavorite();
  }

  async function handleDeleteFavorite() {
    await removeFavorites(`${movie.id}${movie.title}`);
    checkIsFavorite();
  }

  async function checkIsFavorite() {
    const favorites = await getFavorites();
    setIsFavorite(
      favorites
        .filter(
          (item) => `${item.id}${item.title}` === `${movie.id}${movie.title}`
        )
        .length > 0);
  }

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
        checkIsFavorite();
        setLoading(false);
      }
    }
    getMovie();

    return () => {
      isActive = false;
    }
  }, []);

  useEffect(() => {
    checkIsFavorite();
  }, [movie])

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
          ionicons={isFavorite ? "bookmark" : "bookmark-outline"}
          size={28}
          color="white"
          width={46}
          height={46}
          bg="bgIcon"
          br={23}
          justify="center"
          align="center"
          onPress={() =>
            isFavorite
              ? handleDeleteFavorite()
              : handleAddFavorite()
          }
        />
      </HeaderDetail>
      <CustomImage
        resizeMethod="resize"
        source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
        CWidth="100%"
        CHeight={350}
        bblr={50}
        bbrr={50}
      />
      {movie.homepage !== '' &&
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
          onPress={() => setVisible(true)}
        />
      }
      <Container
        bg="bg"
        direction="row"
        align="center"
        justify="space-between"
        width="100%"
      >
        <CustomText
          numberOfLines={2}
          size={22}
          fontFamily="bold"
          pt={12}
          pb={8}
          pl={14}
          pr={14}
          mt={12}
          width="75%"
        >{movie.title}</CustomText>
        <CustomText
          size={22}
          fontFamily="bold"
          pt={12}
          pb={8}
          pl={14}
          pr={14}
          mt={12}
          width="25%"
          align="right"
        >{movie.vote_average}/10</CustomText>
      </Container>
      <Container
        direction="row"
        bg="bg"
        align="center"
        justify="space-between"
        pl={14}
        pr={14}
      >
        <StarIcon rate={movie.vote_average} />
      </Container>
      <ListGenres
        data={movie?.genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Genres genres={item} />}
      />
      <CustomText
        size={22}
        fontFamily="bold"
        pl={14}
        pr={14}
        pt={10}
        pb={10}
      >Descrição</CustomText>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <CustomText
          pl={14}
          pr={14}
          pb={30}
          lineHeight={20}
        >{movie.overview}</CustomText>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <ModalLink
          link={movie?.homepage}
          title={movie?.title}
          closeModal={() => setVisible(false)}
        />
      </Modal>
    </Container>
  );
}