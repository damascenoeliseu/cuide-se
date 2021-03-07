import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
   hasError: boolean;
}

export const Container = styled.div`
   background: rgba(77, 77, 77, 0.8);
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
   display: flex; 
   flex-direction: column;
   align-items: center;
   
   background: #f0f0f5;
   width: 100%;
   max-width: 25rem;
   height: 15rem;
   padding: 2rem;
   border-radius: 5px;
   box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

   text-align: center;
   color: #666666;

   h1 {
      font-size: 2rem;
   }

   div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.7rem 0;

      span {
         max-width: 210px;
         margin-left: 1rem;
         text-align: left;
         font-size: 1.25rem;
      }
   }
`;

export const Form = styled.form<FormProps>`
   max-width: 300px;
   background: #fff;
   padding: 0.3125rem;
   display: flex;
   justify-content: center;

   border-radius: 5px;

   input {
      flex: 1;
      height: 3rem;
      margin-right:0.3125rem;
      padding: 0 0.3125rem;
      border: 0;
      border-radius: 5px;
      color: #a3a3a3;
      border: 2px solid #fff;
      
      ${props =>
      props.hasError &&
         css`
            border-color: #c53030;
         `}

      &::placeholder {
         color: #a8a8b3;
      }
   }

   button {
      width: 3rem;
      height: 3rem;
      background: #04d361;
      border-radius: 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      font-size: 0px;
      align-items: center;
      &:hover {
         background: ${shade(0.2, '#04d361')};
      }
   }
`;

export const Error = styled.span`
   display: block;
   color: #c53030;
   margin-top: 0.5rem;
`;