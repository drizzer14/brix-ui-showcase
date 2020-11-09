import Flex from '@brix-ui/core/flex';

import type { EFC } from 'shared';

import { Heading } from '../shared/heading';

import { Visibility } from './visibility';
import { Ownership } from './ownership';
import { Archive } from './archive';
import { Delete } from './delete';

import Styled from './danger-zone.styles';

export const DangerZone: EFC = () => {
  return (
    <Flex direction="column" gap={{ vertical: '16px' }}>
      <Heading>Danger Zone</Heading>

      <Styled.List>
        {[Visibility, Ownership, Archive, Delete].map((Component, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Component />
            </li>
          );
        })}
      </Styled.List>
    </Flex>
  );
};
