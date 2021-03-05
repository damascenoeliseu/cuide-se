import styled from 'styled-components';

export const Container = styled.div`
   background: rgba(242, 243, 245, 0.8);
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;

   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Content = styled.div`
   background: ${props => props.theme.colors.levelUpModalBackground};
   position: relative;
   width: 100%;
   max-width: 400px;
   padding: 2rem 3rem;
   border-radius: 5px;
   box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

   text-align: center;

   header {
      background: url('/icons/levelup.svg') no-repeat center;
      background-size: contain;
      color: ${props => props.theme.colors.levelUpModalNumber};
      font-size: 8.75rem;
      font-weight: 600;  
   }

   strong {
      font-size: 2.25rem;
      color: ${props => props.theme.colors.title};
   }

   p {
      font-size: 1.25rem;
      color: ${props => props.theme.colors.text};
      margin-top: 0.25rem;
   }

   button {
      background: transparent;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      border: 0;
      font-size: 0px; /*quando o botão tiver apenas um ícone dentro, colocar font-size 0 para
      deixá-lo alinhado */
   }
`;

