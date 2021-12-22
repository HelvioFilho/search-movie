import { Dimensions, PixelRatio } from "react-native"

const { width, height } = Dimensions.get('window');
const baseWidth = 375;

const px = (valuePx: number) => {
  const withPercent = (valuePx / baseWidth) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * withPercent) / 100
  );
  return screenPixel;
}

export const metrics = {
  px,
  width,
  height
}