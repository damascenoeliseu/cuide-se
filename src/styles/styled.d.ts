import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
      title: string;
      toggleTheme: string;
      topnavBackground: string;
      challengeBoxBackground: string;
    }
  }
}