import Alert from '@brix-ui/core/alert';
import Flex from '@brix-ui/core/flex';
import { P } from '@brix-ui/core/text';
import { Anchor, EFC } from 'shared';

import { Heading } from '../shared/heading';

export const DataServices: EFC = () => {
  return (
    <Flex direction="column" verticalGap="16px">
      <Heading>Data services</Heading>

      <Alert intent="accent">
        <P lineHeightCompensation>
          You can now manage Dependabot alerts and Dependabot security updates in the{' '}
          <Anchor as="button" type="button">
            Security & analysis settings
          </Anchor>{' '}
          page.
        </P>
      </Alert>
    </Flex>
  );
};
