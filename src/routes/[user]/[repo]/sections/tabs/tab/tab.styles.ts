import styled from 'styled-components';
import Button from '@brix-ui/core/button';

const Tab = styled(Button)`
  padding: 18px 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid transparent;

  transition: var(--transition-short);

  &:not(:disabled):hover {
    border-bottom-color: var(--c-accent-weak);
  }

  &[data-selected] {
    border-bottom-color: var(--c-accent-strong);

    span {
      font-weight: 700;
    }
  }
`;

const Styled = { Tab };

export default Styled;
