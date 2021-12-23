import styled from 'styled-components/native';
import { ContainerProps } from '../../../utils/interface';

export const ContainerAll = styled.View<ContainerProps>`
  display: flex;
  ${({ flex }) => flex ? `flex:${flex};` : ``}
  height: ${({ theme, height }) => (height ? `${theme.metrics.px(height)}px` : '100%')};
  width: ${({ theme, width }) => (width ? `${theme.metrics.px(width)}px` : '100%')};
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
  padding-top: ${({ pt, theme }) => theme.metrics.px(pt || 0)}px;
  padding-bottom: ${({ pb, theme }) => theme.metrics.px(pb || 0)}px;
  padding-left: ${({ pl, theme }) => theme.metrics.px(pl || 0)}px;
  padding-right: ${({ pr, theme }) => theme.metrics.px(pr || 0)}px;
`;