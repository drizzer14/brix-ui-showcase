import { useEffect, useMemo } from 'react';
import { Cell } from '@brix-ui/grid';
import useSingleSelection from '@brix-ui/hooks/use-single-selection';

import type { EFC } from 'shared';

import { Aside } from './aside';
import { Features } from './features';
import { Heading } from './heading';
import { RepositoryName } from './repository-name';
import { SocialPreview } from './social-preview';

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
        <Heading>Settings</Heading>

        <RepositoryName />

        <SocialPreview />

        <Features />
      </Cell>
    </Styled.Settings>
  );
};
