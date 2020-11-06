import styled from 'styled-components';
import Text from '@brix-ui/core/text';

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

const Styled = { Caption };

export default Styled;
