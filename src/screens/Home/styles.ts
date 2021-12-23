import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  padding-top: ${({ theme }) => theme.metrics.px(4)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(4)}px;
  padding-left: ${({ theme }) => theme.metrics.px(0)};
  padding-right: ${({ theme }) => theme.metrics.px(0)};

`;
