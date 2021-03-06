import styled from 'styled-components';
import Flex from '@brix-ui/core/flex';

const Label = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
}))`
  p {
    font-weight: 700;

    cursor: pointer;
  }
`;

const Styled = { Label };

export default Styled;
