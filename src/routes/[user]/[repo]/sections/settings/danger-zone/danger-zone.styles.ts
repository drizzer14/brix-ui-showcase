import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';

const List = styled(Flex).attrs(() => ({
  forwardedAs: 'ul',
  direction: 'column',
}))`
  border: 1px solid var(--c-critical-strong);
  border-radius: 4px;

  & > li:not(:last-child) {
    border-bottom: 1px solid var(--c-faint-weak-up);
  }
`;

const Styled = { List };

export default Styled;
