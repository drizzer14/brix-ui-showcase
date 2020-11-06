import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';
import { P } from '@brix-ui/core/text';

const ActionSheet = styled(Flex)`
  padding: 16px;

  background-color: var(--c-accent-weak-down);
  border: 1px solid var(--c-accent-weak-up);
  border-radius: 4px;
`;

const Title = styled(P)`
  font-weight: 700;
`;

const ButtonContainer = styled(Flex)`
  flex-shrink: 0;

  span {
    font-weight: 600;
  }
`;

const Styled = { ActionSheet, Title, ButtonContainer };

export default Styled;
