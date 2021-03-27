import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { DefaultTheme } from 'styled-components';
import React, { FormEvent, useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FiGithub } from 'react-icons/fi';
import { ImEnter } from 'react-icons/im';

import { SignInContext, GitHubUser } from '../contexts/SignInContext';
import { ChangeThemeProvider } from '../contexts/ChangeThemeContext';

import api from '../services/api';

import GlobalStyle from '../styles/global';
import { Container, Content, Form, Error } from '../styles/pages/signIn';

interface SignInProps {
   theme: DefaultTheme;
   gitHubUser: GitHubUser[];
}

export default function SignIn(props: SignInProps) {
   const [username, setUsername] = useState<string>();
   const [inputError, setInputError] = useState<string>();

   const { signedInUser, loadlProps } = useContext(SignInContext);

   const { push } = useRouter();

   const handleFindUser = useCallback(async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!username) {
         setInputError('Digite o seu nome de usuário do GitHub');
         return;
      }

      try {
         const response = await api.get(`/users/${username}`);
         if (response) {
            const { login, avatar_url, name } = response.data;
            const foundUser = props.gitHubUser.find(user => user.userData.login === login);
            if (foundUser) {
               signedInUser(foundUser)
            } else {
               signedInUser({
                  userData: {
                     login,
                     avatar_url,
                     name,
                  },
                  level: 1,
                  currentExperience: 0,
                  challengesCompleted: 0,
               });
            }
            loadlProps(props.gitHubUser, props.theme);

            push(`/dashboard`);
         }
      } catch (error) {
         setInputError('Erro ao buscar usuário no GitHub');
      }
   }, [username]);

   return (
      <ChangeThemeProvider theme={props.theme}>
         <Head>
            <title>Início | Move.it</title>
         </Head>
         <Container>
            <Content>
               <h1>Olá! =)</h1>
               <div>
                  <FiGithub size={40} />
                  <span>Entre com seu GitHub para começar</span>
               </div>
               <Form hasError={!!inputError} onSubmit={handleFindUser}>
                  <input
                     onChange={e => setUsername(e.target.value)}
                     placeholder="Nome de usuário"
                  />
                  <button type="submit"><ImEnter size={30} /></button>
               </Form>

               {inputError && <Error>{inputError}</Error>}
            </Content>
         </Container >
         <GlobalStyle />
      </ChangeThemeProvider>
   );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { theme, gitHubUser } = context.req.cookies;

   return {
      props: {
         theme: theme ? JSON.parse(theme) : null,
         gitHubUser: gitHubUser ? JSON.parse(gitHubUser) : [],
      }
   }
}
