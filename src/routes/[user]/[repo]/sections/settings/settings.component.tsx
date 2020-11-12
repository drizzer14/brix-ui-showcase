import Flex from '@brix-ui/core/flex';
import { useEffect, useMemo } from 'react';
import { Cell } from '@brix-ui/grid';
import useSingleSelection from '@brix-ui/hooks/use-single-selection';

import type { EFC } from 'shared';

import { Heading } from './shared';

import { Aside } from './aside';
import { DataServices } from './data-services';
import { Features } from './features';
import { RepositoryName } from './repository-name';
import { SocialPreview } from './social-preview';
import { GithubPages } from './github-pages';
import { MergeButton } from './merge-button';
import { DangerZone } from './danger-zone';

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

      <Cell size={7} offset={[0, 2]}>
        <Flex direction="column" verticalGap="32px">
          <Flex direction="column" verticalGap="16px">
            <Heading>Settings</Heading>

            <RepositoryName />
          </Flex>

          <SocialPreview />

          <Features />

          <DataServices />

          <MergeButton />

          <GithubPages />

          <DangerZone />
        </Flex>
      </Cell>
    </Styled.Settings>
  );
};
