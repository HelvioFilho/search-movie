import styled from 'styled-components/native';

export const Icon = styled.TouchableOpacity`
  height: ${({ theme }) => theme.metrics.px(70)}px;
  flex-direction: row;
  align-items: center;
`;