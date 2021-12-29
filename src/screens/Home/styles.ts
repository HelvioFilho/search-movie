import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Slider = styled(FlatList)`
  height: ${({ theme }) => theme.metrics.px(250)}px;
  margin-right: ${({ theme }) => theme.metrics.px(14)}px;
  padding-left: ${({ theme }) => theme.metrics.px(14)}px;
`as unknown as typeof FlatList;