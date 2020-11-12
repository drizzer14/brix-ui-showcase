import type { FC } from 'react';
import Divider from '@brix-ui/core/divider';

import Styled from './heading.styles';

export const Heading: FC = ({ children }) => {
  return (
    <Divider redLine="0" margin="0" padding={{ vertical: '0.5rem', right: '1rem', left: '0' }}>
      <Styled.Heading>{children}</Styled.Heading>
    </Divider>
  );
};
