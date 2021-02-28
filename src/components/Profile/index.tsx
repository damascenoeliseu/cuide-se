import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container } from './styles';

export function Profile() {
   const { level } = useContext(ChallengesContext);

   return (
      <Container>
         <img src="https://github.com/damascenoeliseu.png" alt="Eliseu Damasceno" />
         <div>
            <strong>Eliseu Damasceno</strong>
            <p>
               <img src="icons/level.svg" alt="Level" />
               Level {level}
            </p>
         </div>
      </Container>
   );
}