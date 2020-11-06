import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Flex from '@brix-ui/core/flex';
import { H1 } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import { Header } from './header';
import { Actions } from './actions';

import { Sections } from './sections';

import Styled from './repo.styles';

const Repo: EFC = () => {
  const { query } = useRouter();
  const { user, repo } = (query as unknown) as { user: string; repo: string };
  const title = useMemo(() => `${user} / ${repo}`, [user, repo]);

  return (
    <>
      <Header title={title} />

      <Styled.Main>
        <Flex as="header" horizontalAlign="space-between" padding="16px 32px">
          <Flex verticalAlign="center" gap={{ horizontal: '8px' }}>
            <Styled.Bookmark />

            <H1 variant="h2">{title}</H1>
          </Flex>

          <Actions />
        </Flex>

        <Sections
          sections={['Code', 'Issues', 'Pull requests', 'Actions', 'Security', 'Insights', 'Settings']}
          defaultSection="Settings"
        />
      </Styled.Main>
    </>
  );
};

export default Repo;
