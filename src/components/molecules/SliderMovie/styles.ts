import styled from 'styled-components/native';

export const Touch = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(140)}px;
  padding-right: ${({ theme }) => theme.metrics.px(14)}px;
`;