import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';
import BrixAlert from '@brix-ui/core/alert';
import BrixTextInput from '@brix-ui/core/text-input';
import Text, { P } from '@brix-ui/core/text';

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

const Link = styled.a`
  color: var(--c-accent-strong);

  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Alert = styled(BrixAlert)`
  width: 100%;
`;

const Title = styled(P)`
  font-weight: 700;
`;

const Code = styled(Text).attrs(() => ({
  forwardedAs: 'code',
}))`
  font-family: var(--f-code);
`;

const TextInput = styled(BrixTextInput)`
  width: 25%;
`;

const Styled = { List, ListItem, Link, Alert, Title, Code, TextInput };

export default Styled;
