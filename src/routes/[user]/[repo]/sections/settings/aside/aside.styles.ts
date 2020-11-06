import styled from 'styled-components';
import Button from '@brix-ui/core/button';
import Flex from '@brix-ui/core/flex';

const Links = styled(Flex).attrs(() => ({
  forwardedAs: 'ul',
}))`
  width: 100%;

  border-radius: 4px;
  border: 1px solid var(--c-faint-weak-up);

  li:not(:last-child) {
    border-bottom: 1px solid var(--c-faint-weak-up);
  }
`;

const Link = styled(Button)`
  width: 100%;
  padding: 22px 16px;

  border: 2px solid transparent;

  &:not(:disabled):hover {
    border-left-color: var(--c-accent-weak);
  }

  &[data-selected] {
    border-left-color: var(--c-accent-strong);
  }
`;

const Styled = { Links, Link };

export default Styled;
