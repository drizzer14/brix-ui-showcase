import type { FC } from 'react';
import Checkbox from '@brix-ui/core/checkbox';
import Flex from '@brix-ui/core/flex';

import { Label } from '../label';

import type { CheckboxDescriptorProps } from './checkbox-descriptor.props';
import Styled from './checkbox-descriptor.styles';

export const CheckboxDescriptor: FC<CheckboxDescriptorProps> = ({ children, label, checkboxProps, ...props }) => {
  return (
    <Flex direction="column" margin={{ left: '-4px' }} {...props}>
      <Label verticalAlign="center" horizontalGap="4px">
        <Checkbox {...checkboxProps} />

        {label}
      </Label>

      <Styled.Caption>{children}</Styled.Caption>
    </Flex>
  );
};
