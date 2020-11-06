import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';
import TextInput from '@brix-ui/core/text-input';
import Text from '@brix-ui/core/text';

const Label = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
}))`
  p {
    font-weight: 700;
  }
`;

const Input = styled(TextInput)`
  width: 33%;
`;

const Caption = styled(Text).attrs(() => ({
  variant: 'small',
}))`
  margin-left: 32px;

  display: inline-block;

  color: var(--c-faint-strong);

  a {
    color: var(--c-accent-strong);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Styled = { Label, Input, Caption };

export default Styled;
