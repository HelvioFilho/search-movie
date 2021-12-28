import React from 'react';
import { Container, CustomImage, CustomText, Header, IconButton, SliderMovie } from '../../components';
import { CustomInput } from '../../components/atoms/CustomInput';
import { ScrollView } from 'react-native';
import { BannerButton, Banner, Slider } from './styles';

export function Home() {
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
      <ScrollView style={{ width: '100%', }}>
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
        <BannerButton activeOpacity={0.7} onPress={() => alert('Olá')}>
          <CustomImage
            CHeight={150}
            br={6}
            ml={14}
            mr={14}
            source={{ uri: 'https://t.ctcdn.com.br/LgGjtcVIc3Z5KpC2RmjMNsop51k=/512x288/smart/i487836.jpeg' }}
            resizeMethod="resize"
          />
        </BannerButton>

        <Slider
          horizontal={true}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderMovie />}
        />
      </ScrollView>
    </Container>
  );
}