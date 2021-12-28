import { ReactNode } from 'react';
import { ImageProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
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

export interface TextProps extends MetricsProps {
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
  name?: React.ComponentProps<typeof Feather>['name'];
  size?: number;
  color?: keyof typeof colors;
}

export interface ImgProps extends ImageProps, MetricsProps {
  br?: number;
  CWidth?: number | string;
  CHeight?: number | string;
}