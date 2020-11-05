import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';

const Container = styled(Flex)`
  width: 25%;
`;

const Suffix = styled.span`
  padding: 1px 6px 2px;
  margin-top: 1px;

  display: block;

  color: var(--c-faint-strong);

  border: 1px solid var(--c-faint-weak-up);
  border-radius: 2px;

  font-size: 10px;
`;

const Styled = { Container, Suffix };

export default Styled;
