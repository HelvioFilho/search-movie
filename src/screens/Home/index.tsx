import React, { useState, useEffect } from 'react';
import { Container, CustomImage, CustomText, Header, IconButton, SliderMovie } from '../../components';
import { CustomInput } from '../../components/atoms/CustomInput';
import { FlatList, ScrollView } from 'react-native';
import { Slider } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { api } from '../../services/api';
import { getListMovies } from '../../utils/movie';
import { MovieProps } from '../../utils/interface';

const { API_KEY } = process.env;

export function Home() {

  const [nowMovies, setNowMovies] = useState<MovieProps[]>([] as MovieProps[]);
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [topMovies, setTopMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    let isActive = true;

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

      const nowList = getListMovies(10, nowData.data.results);
      const popularList = getListMovies(5, popularData.data.results);
      const topList = getListMovies(5, topData.data.results);
      setNowMovies(nowList);
      setPopularMovies(popularList);
      setTopMovies(topList);
    }

    getMovies();
  }, [])

  return (
    <Container
      flex={1}
      bg="bg"
      pt={4}
      pb={4}
    >
      <Header title="React Prime" />
      <CustomInput
        placeholder="Coloque o nome do filme..."
      >
        <IconButton
          width="15%"
          height={50}
          align="center"
          justify="center"
          feather="search"
          size={30}
          color="white"
          onPress={() => { }}
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
        <TouchableOpacity activeOpacity={0.7} onPress={() => alert('Olá')}>
          <CustomImage
            CHeight={150}
            br={6}
            ml={14}
            mr={14}
            source={{ uri: 'https://t.ctcdn.com.br/LgGjtcVIc3Z5KpC2RmjMNsop51k=/512x288/smart/i487836.jpeg' }}
            resizeMethod="resize"
          />
        </TouchableOpacity>

        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SliderMovie data={item} />}
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
          renderItem={({ item }) => <SliderMovie data={item} />}
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
          renderItem={({ item }) => <SliderMovie data={item} />}
        />
      </ScrollView>
    </Container>
  );
}