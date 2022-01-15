import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const FlatFavorite = (styled.FlatList`
  margin-bottom: ${({ theme }) => theme.metrics.px(10)}px;
`as unknown) as typeof FlatList;