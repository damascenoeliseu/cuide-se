import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container } from './styles';

export function ChallengeBox() {
   const {
      activeChallenge,
      resetChallenge,
      completeChallenge,
   } = useContext(ChallengesContext);
   const { resetCountdown } = useContext(CountdownContext);

   function handleChallengeSucceeded() {
      completeChallenge();
      resetCountdown();
   }

   function handleChallengeFailed() {
      resetChallenge();
      resetCountdown();
   }

   return (
      <Container>
         {activeChallenge ? (
            <div className="challengeActive">
               <header>Ganhe {activeChallenge.amount} xp</header>

               <main>
                  <img src={`icons/${activeChallenge.type}.svg`} />
                  <strong>Novo desafio</strong>
                  <p>{activeChallenge.description}</p>
               </main>

               <footer>
                  <button
                     type="button"
                     className="challengeFailedButton"
                     onClick={handleChallengeFailed}
                  >
                     Falhei
                  </button>
                  <button
                     type="button"
                     className="challengeSucceededButton"
                     onClick={handleChallengeSucceeded}
                  >
                     Completei
                  </button>
               </footer>
            </div>
         ) : (
               <div className="challengeNotActive">
                  <strong>Finalize um ciclo para receber um desafio</strong>
                  <p>
                     <img src="icons/level-up.svg" alt="Level Up" />
                     Avance de level completando desafios.
                  </p>
               </div>
            )
         }
      </Container >
   );
}