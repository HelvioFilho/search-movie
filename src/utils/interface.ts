import { ReactNode } from 'react';
import { colors, fonts } from '../global';

export interface MetricsProps {
  children?: ReactNode;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

export interface ContainerProps extends MetricsProps {
  direction?: string;
  align?: string;
  justify?: string;
  bg?: keyof typeof colors;
  width?: number;
  height?: number;
  flex?: number | string;
}

export interface TextProps extends MetricsProps {
  color?: keyof typeof colors;
  fontFamily?: keyof typeof fonts;
  size?: number;
  align?: string;
}

export interface TitleProps {
  title: string;
}

