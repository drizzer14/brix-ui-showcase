import { useEffect, useMemo } from 'react';
import Divider from '@brix-ui/core/divider';
import { H2 } from '@brix-ui/core/text';
import { Cell } from '@brix-ui/grid';
import useSingleSelection from '@brix-ui/hooks/use-single-selection';

import type { EFC } from 'shared';

import { Aside } from './aside';
import { RepositoryName } from './repository-name';

import Styled from './settings.styles';

export const Settings: EFC = () => {
  const links = useMemo(
    () => [
      'Options',
      'Manage access',
      'Security & analysis',
      'Branches',
      'Webhooks',
      'Notifications',
      'Integrations',
      'Deploy keys',
      'Secrets',
      'Actions',
      'Moderation settings',
    ],
    []
  );
  const { value, dispatch } = useSingleSelection(links[0]);

  useEffect(() => {
    links.forEach(dispatch.addOption);

    return () => links.forEach(dispatch.removeOption);
  }, []);

  return (
    <Styled.Settings gap="32px">
      <Cell size={3}>
        <Aside links={links} select={dispatch.setValue} isLinkSelected={(link) => link === value} />
      </Cell>

      <Cell size={9}>
        <Divider redLine="0" margin="0" padding="0.5rem 1rem 0.5rem 0">
          <H2>Settings</H2>
        </Divider>

        <RepositoryName />
      </Cell>
    </Styled.Settings>
  );
};
