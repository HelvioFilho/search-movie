import styled from 'styled-components/native';
import { IconProps } from '../../../utils/interface';

export const Icon = styled.TouchableOpacity<IconProps>`
  width: ${({ theme, width }) => (width ? (Number.isInteger(width) ? `${theme.metrics.px(width as number)}px` : width) : 'auto')};
  height: ${({ theme, height }) => (height ? (Number.isInteger(height) ? `${theme.metrics.px(height as number)}px` : height) : 'auto')};
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};

`;