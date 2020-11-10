import { useTheme } from '@brix-ui/theme/hooks';
import type { StylableComponent } from '@brix-ui/types/component';
import Switch from '@brix-ui/core/switch';

import type { EFC } from '../efc';

import Styled from './theme-switch.styles';

export const ThemeSwitch: EFC<StylableComponent> = (props) => {
  const { mode, switchMode } = useTheme();

  return (
    <Styled.ThemeSwitch {...props}>
      <Switch value={mode} onChange={switchMode}>
        {mode ? '🌞' : '🌚'}
      </Switch>
    </Styled.ThemeSwitch>
  );
};
