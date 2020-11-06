import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';
import BrixDivider from '@brix-ui/core/divider';

const ButtonGroup = styled(Flex)`
  border-radius: 3px;
  border: 1px solid var(--input-border-color);

  button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &:hover {
      color: var(--c-base-strong-down);
    }

    span {
      font-weight: 300;
    }
  }

  button:last-child {
    padding: 5px 8px 6px;

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:hover {
      color: var(--c-accent-strong);
    }
  }
`;

const Divider = styled(BrixDivider)`
  background-color: var(--input-border-color);
`;

const Styled = { ButtonGroup, Divider };

export default Styled;
