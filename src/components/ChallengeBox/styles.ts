import styled from 'styled-components';

export const Container = styled.div`
   height: 100%;
   /* background: var(--white); */
   background: ${props => props.theme.colors.challengeBoxBackground};
   border-radius: 5px;
   box-shadow: 0 0 60px rgba(0,0,0,0.05);
   padding: 1.5rem 2rem;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   text-align: center;

   .challengeNotActive {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .challengeNotActive strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
   }

   .challengeNotActive p {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;
      max-width: 70%;
      margin-top: 3rem;
   }

   .challengeNotActive p img {
      margin-bottom: 1rem;
   }

   .challengeActive {
      height: 100%;

      display: flex;
      flex-direction: column;
   }

   .challengeActive header {
      color: ${(props) => props.theme.colors.challengeBoxHeader};
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0 2rem 1.5rem;
      border-bottom: 1px solid var(--gray-line);
   }

   .challengeActive main {
      flex: 1; /*ocupa a altura máxima do container*/
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   @media(max-width: 720px){
      .challengeActive main img {
         margin-top: 1.5rem;
      }
   }

   .challengeActive main strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.title};
      margin: 1.5rem 0 1rem;
   }

   .challengeActive main p {
      line-height: 1.5;
   }

   .challengeActive footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
   }

   .challengeActive footer button {
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      border-radius: 5px;

      color:var(--white);

      font-size: 1rem;
      font-weight: 600;

      transition: filter 0.2s;
   }

   .challengeActive footer button.challengeFailedButton {
      background: var(--red);
   }

   .challengeActive footer button.challengeSucceededButton {
      background: var(--green);
   }

   .challengeActive footer button:hover {
      filter: brightness(0.9);
   }
`;
