/// <reference types="react-scripts" />

declare module '*.mp4' {
    const src: string;
    export default src;
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
  }