import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';

const Radio = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
  gap: { horizontal: '8px' },
}))``;

const Label = styled(Flex).attrs(() => ({
  direction: 'column',
  gap: { vertical: '4px' },
}))`
  margin-top: 3px;

  cursor: pointer;

  & > p:first-child {
    font-weight: 600;
  }
`;

const Styled = { Radio, Label };

export default Styled;
