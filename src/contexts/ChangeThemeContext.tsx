import { createContext, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ChangeThemeProviderProps {
   children: ReactNode;
}

interface ChangeThemeContextData {
   theme: DefaultTheme;
   toggleTheme(): void;
}

export const ChangeThemeContext = createContext({} as ChangeThemeContextData);

export function ChangeThemeProvider({ children }: ChangeThemeProviderProps) {
   const [theme, setTheme] = useState<DefaultTheme>(light);

   function toggleTheme() {
      setTheme(theme.title === 'light' ? dark : light)
   }

   return (
      <ChangeThemeContext.Provider
         value={{
            theme,
            toggleTheme,
         }}
      >
         {children}
      </ChangeThemeContext.Provider>
   );

}