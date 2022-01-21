import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  CustomImage,
  CustomText,
  Genres,
  IconButton,
  Loading,
  ModalAlert,
  ModalLink,
  StarIcon
} from '../../components';
import { drawerParamList, MovieProps, stackParamList } from '../../utils/interface';
import { useFavorite, api } from '../../services';
import { HeaderDetail, ListGenres } from './styles';

const { API_KEY } = process.env;

export function Detail() {

  const navigation = useNavigation<NavigationProp<drawerParamList>>();
  const route = useRoute<RouteProp<stackParamList, 'Detail'>>();
  const isFocused = useIsFocused();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addFavorites, removeFavorites, getFavorites } = useFavorite();

  async function handleAddFavorite() {
    await addFavorites(movie);
    setAlertMessage("Filme adicionado aos favoritos com sucesso!");
    setVisible(true);
    checkIsFavorite();
  }

  async function delFavoriteMovie() {
    await removeFavorites(`${movie.id}${movie.title}`);
    setAlertMessage("Filme removido dos favoritos com sucesso!");
    setVisible(true);
    setChoice(false);
    checkIsFavorite();
  }

  function handleDeleteFavorite() {
    setAlertMessage("Tem certeza que deseja remover esse filme da lista?");
    setChoice(true);
    setVisible(true);
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
        setLoading(false);
      }
    }
    getMovie();

    return () => {
      isActive = false;
      if (route.params.return === "Movies") {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    }
  }, [isFocused]);

  useEffect(() => {
    checkIsFavorite();
  }, [movie]);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (

    <Container
      flex={1}
      bg="bg"
      pb={4}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <HeaderDetail>
          <IconButton

            onPress={() =>
              route.params.return === 'Search' ?
                navigation.goBack()
                :
                navigation.navigate(
                  route.params.return === 'Home' ?
                    'Home'
                    :
                    'Movies'
                )
            }
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
          resizeMode="stretch"
          source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
          CWidth="100%"
          CHeight={450}
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

        <CustomText
          pl={14}
          pr={14}
          pb={30}
          lineHeight={20}
        >{movie.overview}</CustomText>
      </ScrollView>
      <Modal
        animationType={alertMessage === '' ? "slide" : "fade"}
        transparent={true}
        visible={visible}
      >
        {alertMessage !== '' ?
          <ModalAlert
            alertMessage={alertMessage}
            choice={choice}
            closeModal={() => {
              setVisible(false);
              setAlertMessage('');
            }}
            delFavoriteModal={() => delFavoriteMovie()}
          />
          :
          <ModalLink
            link={movie?.homepage}
            title={movie?.title}
            closeModal={() => setVisible(false)}
          />
        }
      </Modal>
    </Container>
  );
}