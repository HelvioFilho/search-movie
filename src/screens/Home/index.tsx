import React from 'react';
import { Container, Header, IconButton } from '../../components';
import { CustomInput } from '../../components/atoms/CustomInput';

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
          name="search"
          size={30}
          color="white"
          onPress={() => { }}
        />
      </CustomInput>
    </Container>
  );
}