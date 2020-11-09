import Button from '@brix-ui/core/button';
import { Span } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import { ActionSheetProps as BaseActionSheetProps } from '../../../shared';

import Styled from './action-sheet.styles';

interface ActionSheetProps extends BaseActionSheetProps {
  onClick(): void;
}

export const ActionSheet: EFC<ActionSheetProps> = ({ button, onClick, ...props }) => {
  return (
    <Styled.ActionSheet
      button={
        <Button intent="critical" appearance="faint" onClick={onClick}>
          <Span lineHeightCompensation>{button}</Span>
        </Button>
      }
      {...props}
    />
  );
};
