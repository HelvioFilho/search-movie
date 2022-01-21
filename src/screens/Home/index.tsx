import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import {
  Container,
  CustomImage,
  CustomText,
  CustomInput,
  Header,
  IconButton,
  SliderMovie,
  Loading
} from '../../components';
import { Slider } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { getListMovies, radomBanner } from '../../utils/movie';
import { MovieProps, stackParamList } from '../../utils/interface';
import { api } from '../../services';

const { API_KEY } = process.env;

export function Home() {

  const [loading, setLoading] = useState(true);
  const [nowMovies, setNowMovies] = useState<MovieProps[]>([] as MovieProps[]);
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [topMovies, setTopMovies] = useState<MovieProps[]>([]);
  const [bannerMovie, setBannerMovie] = useState<MovieProps>({} as MovieProps);
  const [input, setInput] = useState('');

  const navigation = useNavigation<NavigationProp<stackParamList>>();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing',
          {
            params: {
              api_key: API_KEY,
              language: 'pt-BR',
              page: 1,
            }
          }),
        api.get('/movie/popular',
          {
            params: {
              api_key: API_KEY,
              language: 'pt-BR',
              page: 1,
            }
          }),
        api.get('/movie/top_rated',
          {
            params: {
              api_key: API_KEY,
              language: 'pt-BR',
              page: 1,
            }
          }),
      ]);

      if (isActive) {
        const nowList = getListMovies(20, nowData.data.results);
        const popularList = getListMovies(10, popularData.data.results);
        const topList = getListMovies(10, topData.data.results);
        setBannerMovie(nowData.data.results[radomBanner(nowData.data.results)]);
        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);
        setLoading(false);
      }
    }

    getMovies();

    return () => {
      isActive = false;
      ac.abort();
    }
  }, [])

  function navigateDetailsPage(item: MovieProps) {
    navigation.navigate('Detail', { id: item.id, return: 'Home' });
  }

  function handleSearchMovie() {
    if (input === '') return;
    navigation.navigate('Search', { search: input });
    setInput('');
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
      pt={4}
      pb={4}
    >
      <Header title="Cinema Prime" />
      <CustomInput
        placeholder="Coloque o nome do filme..."
        value={input}
        onChangeText={(text) => setInput(text)}
      >
        <IconButton
          width="15%"
          height={50}
          align="center"
          justify="center"
          feather="search"
          size={30}
          color="white"
          onPress={handleSearchMovie}
        />
      </CustomInput>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', }}
      >
        <CustomText
          pt={20}
          pb={8}
          pl={14}
          pr={14}
          fontFamily="bold"
          size={24}
          color="white"
        >
          Em cartaz
        </CustomText>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigateDetailsPage(bannerMovie)}>
          <CustomImage
            CHeight={150}
            br={6}
            ml={14}
            mr={14}
            source={{ uri: `https://image.tmdb.org/t/p/original${bannerMovie.poster_path}` }}
            resizeMethod="resize"
          />
        </TouchableOpacity>

        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SliderMovie data={item} navigatePage={() => navigateDetailsPage(item)} />}
        />
        <CustomText
          pt={10}
          pb={5}
          pl={14}
          pr={14}
          fontFamily="bold"
          size={24}
          color="white"
        >
          Populares
        </CustomText>
        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SliderMovie data={item} navigatePage={() => navigateDetailsPage(item)} />}
        />
        <CustomText
          pt={10}
          pb={5}
          pl={14}
          pr={14}
          fontFamily="bold"
          size={24}
          color="white"
        >
          Mais Votados
        </CustomText>
        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SliderMovie data={item} navigatePage={() => navigateDetailsPage(item)} />}
        />
      </ScrollView>
    </Container>
  );
}