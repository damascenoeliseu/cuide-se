import styled from 'styled-components';

export const Container = styled.header`
   display: flex;
   align-items: center;

   span {
      font-size: 1rem;
   }

   & > div { /* > pega a div que está exatamente dentro da classe
      e não as que estão dentro de mais níveis */
      flex: 1; /*ocupa a largura máxima do container*/
      height: 4px;
      border-radius: 4px;
      background: var(--gray-line);
      margin: 0 1.5rem;
      position: relative; 
   }

   & > div > div { 
      height: 4px;
      border-radius: 4px;
      background: var(--green);
   }

   span.currentExperience {
      position: absolute;
      top: 12px;
      transform: translatex(-50%);
   }
`;

