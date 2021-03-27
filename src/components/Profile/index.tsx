import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { SignInContext } from '../../contexts/SignInContext';

import { Container } from './styles';

export function Profile() {
   const {level} = useContext(ChallengesContext);
   const { user } = useContext(SignInContext);

   return (
      <Container>
         <img src={user.userData.avatar_url} alt="Eliseu Damasceno" />
         <div>
            <strong>{user.userData.name}</strong>
            <p>
               <img src="icons/level.svg" alt="Level" />
               Level {level}
            </p>
         </div>
      </Container>
   );
}