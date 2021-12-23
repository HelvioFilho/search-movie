import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(50)}px;
  align-items: center;
  padding-top: ${({ theme }) => theme.metrics.px(0)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(0)}px;
  padding-left: ${({ theme }) => theme.metrics.px(14)}px;
  padding-right: ${({ theme }) => theme.metrics.px(14)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(8)}px;
`;

export const Input = styled(TextInput)`
  background-color: rgba(255, 255, 255,0.4);
  width: 85%;
  height: ${({ theme }) => theme.metrics.px(50)}px;
  border-radius: ${({ theme }) => theme.metrics.px(50)}px;
  padding-top: ${({ theme }) => theme.metrics.px(8)}px;
  padding-bottom: ${({ theme }) => theme.metrics.px(8)}px;
  padding-left: ${({ theme }) => theme.metrics.px(15)}px;
  padding-right: ${({ theme }) => theme.metrics.px(15)}px;
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: ${({ theme }) => theme.colors.input};
`