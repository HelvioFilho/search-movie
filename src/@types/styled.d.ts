import 'styled-components';
import { colors, fonts, metrics } from '../global';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
    metrics: typeof metrics;
  }
}