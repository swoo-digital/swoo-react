// theme.ts
import * as CSS from 'csstype';

// export interface ThemeColors {
//   black: CSS.ColorProperty;
//   white: CSS.ColorProperty;
// }

// const colors: ThemeColors = {
//   black: '#000000',
//   white: '#fffffff'
// };

const colors = {
  black: '#000000',
  white: '#ffffff'
};

export type ThemeColor = keyof typeof colors;

export default colors