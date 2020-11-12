import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';
import BrixAlert from '@brix-ui/core/alert';
import BrixTextInput from '@brix-ui/core/text-input';
import { P } from '@brix-ui/core/text';

const List = styled(Flex).attrs(() => ({
  forwardedAs: 'ul',
  direction: 'column',
}))`
  border: 1px solid var(--c-faint-weak-up);
  border-radius: 4px;

  &[data-published] {
    & > li:first-child {
      border-bottom: 1px solid var(--c-success-weak);

      & > * {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
`;

const ListItem = styled(Flex).attrs(() => ({
  forwardedAs: 'li',
  direction: 'column',
}))`
  &:not(:last-child) {
    border-bottom: 1px solid var(--c-faint-weak-up);
  }
`;

const Alert = styled(BrixAlert)`
  width: 100%;
`;

const Title = styled(P).attrs(() => ({
  weight: 700,
}))``;

const TextInput = styled(BrixTextInput)`
  width: 25%;
`;

const Styled = { List, ListItem, Alert, Title, TextInput };

export default Styled;
