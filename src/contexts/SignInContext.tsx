import { createContext, ReactNode, useState } from 'react';
import { DefaultTheme } from 'styled-components';

export interface GitHubUser {
   userData: {
      login: string;
      avatar_url: string;
      name: string;
   }
   level: number;
   currentExperience: number;
   challengesCompleted: number;
}

interface SignInProviderProps {
   children: ReactNode;
}

interface SignInContextData {
   signedInUser: (user: GitHubUser) => void;
   loadlProps: (gitHubUser: GitHubUser[], theme: DefaultTheme) => void;
   user: GitHubUser;
   gitHubUsers: GitHubUser[];
   theme: DefaultTheme;
}

export const SignInContext = createContext({} as SignInContextData);

export function SignInProvider({ children }: SignInProviderProps) {
   const [user, setUser] = useState<GitHubUser>();
   const [gitHubUsers, setGitHubUsers] = useState<GitHubUser[]>();
   const [theme, setTheme] = useState<DefaultTheme>();

   function signedInUser(user: GitHubUser) {
      setUser(user);
   }

   function loadlProps(gitHubUsers: GitHubUser[], theme: DefaultTheme) {
      setGitHubUsers(gitHubUsers);
      setTheme(theme);
   }

   return (
      <SignInContext.Provider
         value={{
            signedInUser,
            loadlProps,
            user,
            gitHubUsers,
            theme,
         }}
      >
         { children}
      </SignInContext.Provider>
   );

}