import Alert from '@brix-ui/core/alert';
import Flex from '@brix-ui/core/flex';
import { P } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import { Heading } from '../shared/heading';

import Styled from './data-services.styles';

export const DataServices: EFC = () => {
  return (
    <Flex direction="column" gap={{ vertical: '16px' }}>
      <Heading>Data services</Heading>

      <Alert intent="accent">
        <P lineHeightCompensation>
          You can now manage Dependabot alerts and Dependabot security updates in the{' '}
          <Styled.Link type="button">Security & analysis settings</Styled.Link> page.
        </P>
      </Alert>
    </Flex>
  );
};
