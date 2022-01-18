import styled from 'styled-components/native';
import { colors } from '../../../global';

interface ButtonAlertProps {
  color: keyof typeof colors;
}

export const IconX = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(20)}px;
  right: ${({ theme }) => theme.metrics.px(20)}px;
`;

export const ButtonModal = styled.TouchableOpacity<ButtonAlertProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme }) => theme.metrics.px(10)}px;
  width: ${({ theme }) => theme.metrics.px(80)}px;
  height: ${({ theme }) => theme.metrics.px(34)}px;
  justify-content: center;
  align-items: center;
`;