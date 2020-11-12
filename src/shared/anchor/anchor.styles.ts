import styled from 'styled-components';

const Anchor = styled.a`
  color: var(--c-accent-strong);
  
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Styled = { Anchor };

export default Styled;
