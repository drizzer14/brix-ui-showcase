import type { FC } from 'react';
import { FlexProps } from '@brix-ui/core/flex';

import Styled from './label.styles';

export const Label: FC<FlexProps> = (props) => {
  return <Styled.Label {...props} />;
};
