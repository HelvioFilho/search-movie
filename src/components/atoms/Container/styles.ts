import styled from 'styled-components/native';
import { ContainerProps } from '../../../utils/interface';

export const ContainerAll = styled.View<ContainerProps>`
  display: flex;
  ${({ flex }) => flex ? `flex:${flex};` : ``}
  width: ${({ theme, width }) => (width ? (Number.isInteger(width) ? `${theme.metrics.px(width as number)}px` : width) : 'auto')};
  height: ${({ theme, height }) => (height ? (Number.isInteger(height) ? `${theme.metrics.px(height as number)}px` : height) : 'auto')};
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
  padding-top: ${({ pt, theme }) => theme.metrics.px(pt || 0)}px;
  padding-bottom: ${({ pb, theme }) => theme.metrics.px(pb || 0)}px;
  padding-left: ${({ pl, theme }) => theme.metrics.px(pl || 0)}px;
  padding-right: ${({ pr, theme }) => theme.metrics.px(pr || 0)}px;
  margin-top: ${({ mt, theme }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ mb, theme }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ ml, theme }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ mr, theme }) => theme.metrics.px(mr || 0)}px;
  border-radius: ${({ theme, br }) => theme.metrics.px(br || 0)}px;
`;