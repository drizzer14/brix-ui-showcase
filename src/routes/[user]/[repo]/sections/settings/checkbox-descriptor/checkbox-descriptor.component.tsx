import type { FC, ReactNode } from 'react';
import Checkbox from '@brix-ui/core/checkbox';
import Flex from '@brix-ui/core/flex';

import { Label } from '../label';

import Styled from './checkbox-descriptor.styles';

export const CheckboxDescriptor: FC<{ label: ReactNode }> = ({ children, label }) => {
  return (
    <Flex direction="column" margin={{ left: '-4px' }}>
      <Label verticalAlign="center" gap={{ horizontal: '4px' }}>
        <Checkbox />

        {label}
      </Label>

      <Styled.Caption>{children}</Styled.Caption>
    </Flex>
  );
};
