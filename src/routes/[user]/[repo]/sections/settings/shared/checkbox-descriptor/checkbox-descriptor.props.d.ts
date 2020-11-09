import type { ReactNode } from 'react';
import type { FlexProps } from '@brix-ui/core/flex';
import type { CheckboxProps } from '@brix-ui/core/checkbox';

export interface CheckboxDescriptorProps extends FlexProps {
  label: ReactNode;
  checkboxProps?: CheckboxProps;
}
