import React, { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { ImEnter } from 'react-icons/im';
import { SignInContext } from '../../contexts/SignInContext';
import api from '../../services/api';

import { Container, Content, Form, Error } from './styles';

interface GitHubUser {
   login: string;
   avatar_url: string;
   name: string;
}

export function UsernameModal() {
   const [username, setUsername] = useState<string>();
   const [user, setUser] = useState<GitHubUser>();
   const [inputError, setInputError] = useState<string>();
   const { closeUsernameModal } = useContext(SignInContext);

   async function handleFindUser(event: FormEvent<HTMLFormElement>,
   ): Promise<void> {
      event.preventDefault();

      if (!username) {
         setInputError('Digite o seu nome de usuário do GitHub');
         return;
      }

      try {
         const response = await api.get<GitHubUser>(`/users/${username}`);
         if (response) {
            setUser(response.data);
            closeUsernameModal();
         }
      } catch (error) {
         setInputError('Erro ao buscar usuário no GitHub');
      }
   };

   return (
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
   );
}