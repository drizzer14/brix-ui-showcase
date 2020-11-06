import type { FC } from 'react';
import Divider from '@brix-ui/core/divider';
import { H2 } from '@brix-ui/core/text';

export const Heading: FC = ({ children }) => {
  return (
    <Divider redLine="0" margin="0" padding="0.5rem 1rem 0.5rem 0">
      <H2>{children}</H2>
    </Divider>
  );
};
