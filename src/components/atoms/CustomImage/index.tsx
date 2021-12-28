import React from 'react';
import { ImgProps } from '../../../utils/interface';
import { Image } from './styles';

export function CustomImage({ ...props }: ImgProps) {
  return (
    <Image {...props}>

    </Image>
  );
}