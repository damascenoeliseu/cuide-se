import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container, Content } from './styles';

export function LevelUpModal() {
   const { level, closeLevelUpModal } = useContext(ChallengesContext);

   return (
      <Container>
         <Content>
            <header>{level}</header>

            <strong>Parabéns</strong>
            <p>Você alcançou um novo level.</p>

            <button type="button" onClick={closeLevelUpModal}>
               <img src="/icons/close.svg" alt="Fechar modal" />
            </button>
         </Content>
      </Container>
   );
}