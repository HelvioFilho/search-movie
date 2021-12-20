import 'styled-components';
import { colors } from '../global/styles/colors';
import { fonts } from '../global/styles/fonts';
import { metrics } from '../global/styles/metrics';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
    metrics: typeof metrics;
  }
}