import styled from 'styled-components/native';

export const BannerButton = styled.TouchableOpacity`
`;

export const Banner = styled.Image`
  height: ${({ theme }) => theme.metrics.px(150)}px;
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
  margin-left: ${({ theme }) => theme.metrics.px(14)}px;
  margin-right: ${({ theme }) => theme.metrics.px(14)}px;
`;

export const Slider = styled.FlatList`
  height: ${({ theme }) => theme.metrics.px(250)}px;
  padding-right: ${({ theme }) => theme.metrics.px(14)}px;
  padding-left: ${({ theme }) => theme.metrics.px(14)}px;
`;