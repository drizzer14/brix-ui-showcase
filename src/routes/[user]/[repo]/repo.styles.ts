import styled from 'styled-components';

import Flex from '@brix-ui/core/flex';
import { size } from '@brix-ui/theme/mixin';
import { Bookmark as BookmarkIcon } from './bookmark';

const Main = styled(Flex).attrs(() => ({
  forwardedAs: 'main',
  direction: 'column',
}))`
  flex-grow: 1;
`;

const Bookmark = styled(BookmarkIcon)`
  ${size('16px')};

  margin-top: 3px;

  stroke: var(--c-faint-strong);
  fill: var(--c-base-weak);
`;

const Styled = { Main, Bookmark };

export default Styled;
