import Flex from '@brix-ui/core/flex';

import type { EFC } from 'shared';
import { useApi } from '../../../api';

import { Heading } from '../shared/heading';

import { Visibility } from './visibility';
import { Ownership } from './ownership';
import { Archive } from './archive';
import { Delete } from './delete';

import Styled from './danger-zone.styles';

export const DangerZone: EFC = () => {
  const { user, repo } = useApi();

  return (
    <Flex direction="column" gap={{ vertical: '16px' }}>
      <Heading>Danger Zone</Heading>

      <Styled.List>
        {[Visibility, Ownership, Archive, Delete].map((Component, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Component user={user} repo={repo} />
            </li>
          );
        })}
      </Styled.List>
    </Flex>
  );
};
