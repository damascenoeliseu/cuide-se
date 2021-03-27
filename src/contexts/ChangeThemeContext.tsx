import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ChangeThemeProviderProps {
   children: ReactNode;
   theme: DefaultTheme;
}

interface ChangeThemeContextData {
   theme: DefaultTheme;
   toggleTheme(): void;
}

export const ChangeThemeContext = createContext({} as ChangeThemeContextData);

export function ChangeThemeProvider({ children, ...rest }: ChangeThemeProviderProps) {
   const [theme, setTheme] = useState<DefaultTheme>(rest.theme ?? light);

   function toggleTheme() {
      setTheme(theme.title === 'light' ? dark : light);
   }

   useEffect(() => {
      Cookies.set('theme', JSON.stringify(theme));
   }, [theme]);

   return (
      <ThemeProvider theme={theme}>
         <ChangeThemeContext.Provider
            value={{
               theme,
               toggleTheme,
            }}
         >
            {children}
         </ChangeThemeContext.Provider>
      </ThemeProvider>
   );
}