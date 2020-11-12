import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';

const Radio = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
  horizontalGap: '8px',
}))``;

const Label = styled(Flex).attrs(() => ({
  direction: 'column',
  verticalGap: '4px',
}))`
  margin-top: 3px;

  cursor: pointer;
`;

const Styled = { Radio, Label };

export default Styled;
