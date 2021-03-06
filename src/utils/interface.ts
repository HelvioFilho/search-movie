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
  justify?: 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  bg?: keyof typeof colors;
  width?: number | string;
  height?: number | string;
  flex?: number | string;
  br?: number;
}

export interface CustomTextProps extends TextProps, MetricsProps {
  color?: keyof typeof colors;
  fontFamily?: keyof typeof fonts;
  size?: number;
  align?: string;
  width?: number | string;
  lineHeight?: number;
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
  redBottom?: boolean;
}

export interface ImgProps extends ImageProps, MetricsProps {
  br?: number;
  CWidth?: number | string;
  CHeight?: number | string;
  bblr?: number;
  bbrr?: number;
}

interface GenresProps {
  id: number;
  name: string;
}

export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  homepage: string;
  release_date: string;
  genres: [GenresProps];
}

export interface GenresListProps {
  genres: GenresProps;
}

export interface StorageMovie {
  [id: string]: {
    data: MovieProps;
  }
}

export interface SliderMovieProps {
  data: MovieProps;
  navigatePage: (data: MovieProps) => void;
}

export interface SearchListProps extends SliderMovieProps {
  delMovie: (data: MovieProps) => void;
}

export type stackParamList = {
  Detail: {
    id: number;
    return: string;
  };
  Search: {
    search: string;
  };
}

export type drawerParamList = {
  Home: undefined;
  Movies: undefined;
}

export interface StarProps {
  rate: number;
}

export interface ListStarProps {
  id: number;
  type: string;
}

export interface ModalLinkProps {
  link: string;
  title: string;
  closeModal: () => void;
}

export interface ModalAlertProps {
  alertMessage: string;
  closeModal: () => void;
  delFavoriteModal: () => void;
  choice: boolean;
}