import Text from '@brix-ui/core/text';
import styled from 'styled-components';
import Flex, { FlexProps } from '@brix-ui/core/flex';

import { ThemeSwitch as BaseThemeSwitch } from 'shared';

const Form = styled(Flex).attrs<FlexProps>(() => ({
  forwardedAs: 'form',
  direction: 'column',
  align: 'center',
}))`
  flex-grow: 1;
`;

const Container = styled(Flex).attrs<FlexProps>(() => ({
  direction: 'column',
  verticalAlign: 'center',
}))`
  width: 25%;

  button {
    justify-content: center;
  }
`;

const Label = styled(Container).attrs(() => ({
  forwardedAs: 'label',
  verticalGap: '4px',
}))`
  position: relative;
`;

const Error = styled(Text).attrs(() => ({
  forwardedAs: 'small',
  color: 'critical-strong',
}))`
  position: absolute;
  bottom: 8px;
  left: 0;
`;

const ThemeSwitch = styled(BaseThemeSwitch)`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
`;

const Styled = { Form, Container, Label, Error, ThemeSwitch };

export default Styled;
