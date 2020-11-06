import styled from 'styled-components';

const Link = styled.button`
  color: var(--c-accent-strong);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Styled = { Link };

export default Styled;
