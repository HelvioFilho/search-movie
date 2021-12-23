import styled from 'styled-components/native';
import { TextProps } from '../../../utils/interface';

export const Text = styled.Text<TextProps>`
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'regular']};
  font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
`;