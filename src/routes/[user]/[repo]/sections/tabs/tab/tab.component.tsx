import { useEffect } from 'react';
import { Strong } from '@brix-ui/core/text';
import { orUndefined } from '@brix-ui/utils/functions';

import type { EFC } from 'shared';

import Styled from './tab.styles';
import type { TabProps } from './tab.props';

export const Tab: EFC<TabProps> = ({ children: option, isSelected, register, select }) => {
  useEffect(() => {
    register(option);
  }, [option]);

  return (
    <Styled.Tab
      appearance="text"
      isDisabled={!isSelected}
      data-selected={orUndefined(isSelected)}
      onClick={() => select(option)}
    >
      <Strong>{option}</Strong>
    </Styled.Tab>
  );
};
