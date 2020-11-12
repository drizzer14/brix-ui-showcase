import Flex from '@brix-ui/core/flex';
import { P } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import type { ActionSheetProps } from './action-sheet.props';
import Styled from './action-sheet.styles';

export const ActionSheet: EFC<ActionSheetProps> = ({ title, description, button, className }) => {
  return (
    <Styled.ActionSheet className={className} horizontalAlign="space-between" horizontalGap="32px">
      <Flex direction="column">
        <P weight={700}>{title}</P>

        <P>{description}</P>
      </Flex>

      <Styled.ButtonContainer direction="column">{button}</Styled.ButtonContainer>
    </Styled.ActionSheet>
  );
};
