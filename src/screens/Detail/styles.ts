import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const HeaderDetail = styled.View`
  z-index: 99;
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(35)}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 0px;
  padding-top: 0px;
  padding-left: ${({ theme }) => theme.metrics.px(24)}px;
  padding-right: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const ListGenres = (styled.FlatList`
  padding-left: ${({ theme }) => theme.metrics.px(14)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(8)}px;
  max-height: ${({ theme }) => theme.metrics.px(22)}px;
  min-height: ${({ theme }) => theme.metrics.px(22)}px;
`as unknown) as typeof FlatList;