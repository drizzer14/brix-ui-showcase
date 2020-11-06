import type { FC } from 'react';
import Divider from '@brix-ui/core/divider';

import Styled from './heading.styles';

export const Heading: FC = ({ children }) => {
  return (
    <Divider redLine="0" margin="0" padding="0.5rem 1rem 0.5rem 0">
      <Styled.Heading>{children}</Styled.Heading>
    </Divider>
  );
};
