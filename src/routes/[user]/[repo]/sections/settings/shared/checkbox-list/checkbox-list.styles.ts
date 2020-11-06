import Button from '@brix-ui/core/button';
import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';

import { ActionSheet as BaseActionSheet } from '../action-sheet';

const List = styled(Flex).attrs(() => ({
  forwardedAs: 'ul',
  direction: 'column',
}))`
  border-radius: 4px;
  border: 1px solid var(--c-faint-weak-up);

  li {
    padding: 16px;
  }

  li:not(:last-child) {
    border-bottom: 1px solid var(--c-faint-weak-up);
  }
`;

const ActionSheet = styled(BaseActionSheet)`
  margin-top: 16px;
  margin-left: 24px;
`;

const ActionButton = styled(Button).attrs(() => ({
  intent: 'success',
}))`
  margin: auto 0;
`;

const Styled = { List, ActionSheet, ActionButton };

export default Styled;
