import styled from 'styled-components/native';
import { ImgProps } from '../../../utils/interface';

export const Image = styled.Image<ImgProps>`
  width: ${({ theme, CWidth }) => (CWidth ? (Number.isInteger(CWidth) ? `${theme.metrics.px(CWidth as number)}px` : CWidth) : 'auto')};
  height: ${({ theme, CHeight }) => (CHeight ? (Number.isInteger(CHeight) ? `${theme.metrics.px(CHeight as number)}px` : CHeight) : 'auto')};
  border-radius: ${({ theme, br }) => theme.metrics.px(br || 0)}px;
  margin-left: ${({ theme }) => theme.metrics.px(14)}px;
  margin-right: ${({ theme }) => theme.metrics.px(14)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
`;