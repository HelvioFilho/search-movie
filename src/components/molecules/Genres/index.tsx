import React from 'react';
import { CustomText, Container } from '../../atoms';
import { GenresListProps } from '../../../utils/interface';

export function Genres({ genres }: GenresListProps) {
  return (
    <Container
      align="center"
      justify="center"
      pt={2}
      pb={2}
      pr={10}
      pl={10}
      mr={8}
      br={8}
    >
      <CustomText size={10} color="black">{genres.name}</CustomText>
    </Container>
  );
}