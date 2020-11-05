import Button from '@brix-ui/core/button';
import { Span } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import Styled from './button-group.styles';

interface ButtonGroupProps {
  title: string;
  count: number;
}

export const ButtonGroup: EFC<ButtonGroupProps> = ({ title, count }) => {
  return (
    <Styled.ButtonGroup forwardedAs="li">
      <Button appearance="faint">
        <Span lineHeightCompensation variant="p">
          {title}
        </Span>
      </Button>

      <Styled.Divider direction="column" margin="0" />

      <Button appearance="faint">
        <Span lineHeightCompensation variant="p">
          {count}
        </Span>
      </Button>
    </Styled.ButtonGroup>
  );
};
