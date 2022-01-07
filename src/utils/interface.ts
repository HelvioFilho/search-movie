import { ReactNode } from 'react';
import { ImageProps, TextProps } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
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
  width?: number | string;
  height?: number | string;
  flex?: number | string;
}

export interface CustomTextProps extends TextProps, MetricsProps {
  color?: keyof typeof colors;
  fontFamily?: keyof typeof fonts;
  size?: number;
  align?: string;
}

export interface TitleProps {
  title: string;
}

export interface IconProps extends ContainerProps {
  onPress?: () => void;
  feather?: React.ComponentProps<typeof Feather>['name'];
  ionicons?: React.ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: keyof typeof colors;
  br?: number;
  redBottom: boolean;
}

export interface ImgProps extends ImageProps, MetricsProps {
  br?: number;
  CWidth?: number | string;
  CHeight?: number | string;
  bblr?: number;
  bbrr?: number;
}

export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
}

export interface SliderMovieProps {
  data: MovieProps;
  navigatePage: (data: MovieProps) => void;
}

export type stackParamList = {
  Detail: { id: number }
}