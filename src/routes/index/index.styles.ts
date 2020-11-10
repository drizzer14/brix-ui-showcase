import styled from 'styled-components';
import Flex, { FlexProps } from '@brix-ui/core/flex';

import { ThemeSwitch as BaseThemeSwitch } from 'shared';

const Main = styled(Flex).attrs<FlexProps>(() => ({
  forwardedAs: 'main',
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
  gap: { vertical: '4px' },
}))``;

const ThemeSwitch = styled(BaseThemeSwitch)`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
`;

const Styled = { Main, Container, Label, ThemeSwitch };

export default Styled;
