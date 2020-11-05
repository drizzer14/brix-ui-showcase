import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Flex from '@brix-ui/core/flex';
import { H1 } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import { Actions } from './actions';
import { Header } from './header';

import Styled from './repo.styles';

const Repo: EFC = () => {
  const { query } = useRouter();
  const { user, repo } = (query as unknown) as { user: string; repo: string };
  const title = useMemo(() => `${user} / ${repo}`, [user, repo]);

  return (
    <>
      <Header title={title} />

      <Styled.Main>
        <Flex as="nav" horizontalAlign="space-between" padding="16px 32px">
          <Flex verticalAlign="center" gap={{ horizontal: '8px' }}>
            <Styled.Bookmark />

            <H1 variant="h2">{title}</H1>
          </Flex>

          <Actions />
        </Flex>
      </Styled.Main>
    </>
  );
};

export default Repo;
