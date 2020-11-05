import styled from 'styled-components';
import { size } from '@brix-ui/theme/mixin';
import Flex from '@brix-ui/core/flex';
import BrixCell from '@brix-ui/grid/cell';

import { Github } from './github';

const Header = styled(Flex).attrs(() => ({
  forwardedAs: 'header',
}))`
  --input-background-color: var(--c-base-weak-up);

  height: 62px;
  width: 100%;

  padding: 16px 32px;

  color: var(--c-base-strong);
  background-color: var(--c-base-weak-up);
`;

const Logo = styled(Github)`
  ${size('32px')};

  color: var(--c-base-strong);

  transition: var(--transition-short);

  cursor: pointer;

  &:hover {
    color: var(--c-base-strong-down);
  }
`;

const Cell = styled(BrixCell)`
  display: flex;
  align-items: flex-end;
`;

const Styled = { Header, Logo, Cell };

export default Styled;
