import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 2.5rem;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   margin-bottom: 2rem;
   color: ${props => props.theme.colors.text};
   /* background: ${props => props.theme.colors.TopnavBackground}; */

   p {
      margin-right: 0.5rem;
   }
`;
