import React from 'react';
import { Container, Header } from '../../components';



export function Home() {
  return (
    <Container
      flex={1}
      bg="bg"
      pt={4}
      pb={4}
    >
      <Header title="React Prime" />
    </Container>
  );
}