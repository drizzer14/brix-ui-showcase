import Flex from '@brix-ui/core/flex';
import styled from 'styled-components';

export const Section = styled(Flex).attrs(() => ({
  forwardedAs: 'section',
}))`
  padding: 32px;

  flex-grow: 1;

  background-color: var(--c-base-weak-up);
  border-top: 1px solid var(--c-base-weak-down);
`;

const Styled = { Section };

export default Styled;
