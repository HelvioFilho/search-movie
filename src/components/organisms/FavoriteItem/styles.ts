import styled from 'styled-components/native';

export const DetailButton = styled.TouchableOpacity`
  width: 40%;
  flex-direction: row;
  height: ${({ theme }) => theme.metrics.px(30)}px;
  background-color: ${({ theme }) => theme.colors.cta}
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
`;