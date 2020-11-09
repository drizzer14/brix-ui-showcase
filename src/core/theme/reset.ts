import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  #__next {
    min-height: 100%;
    
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  a {
    color: var(--c-accent-strong);
    
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
