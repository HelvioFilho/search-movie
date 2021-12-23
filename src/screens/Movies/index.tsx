import React from 'react';
import { Container } from '../../components';

import { Title } from './styles';

export function Movies() {
  return (
    <Container
      flex={1}
      direction="row"
      bg="bg"
      align="center"
      justify="center"
    >
      <Title> Tela Movies</Title>
    </Container>
  );
}