import styled from 'styled-components/native';
import { CustomTextProps } from '../../../utils/interface';

export const Text = styled.Text<CustomTextProps>`
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ theme, fontFamily }) => theme.fonts[fontFamily || 'regular']};
  font-size: ${({ theme, size }) => theme.metrics.px(size || 14)}px;
  color: ${({ theme, color }) => theme.colors[color || 'white']};
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  padding-left: ${({ theme, pl }) => theme.metrics.px(pl || 0)}px;
  padding-right: ${({ theme, pr }) => theme.metrics.px(pr || 0)}px;
  padding-top: ${({ theme, pt }) => theme.metrics.px(pt || 0)}px;
  padding-bottom: ${({ theme, pb }) => theme.metrics.px(pb || 0)}px;
  width: ${({ theme, width }) => (width ? (Number.isInteger(width) ? `${theme.metrics.px(width as number)}px` : width) : 'auto')};
`;