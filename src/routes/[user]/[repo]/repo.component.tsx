import { useMemo } from 'react';
import { GetServerSideProps } from 'next';
import Flex from '@brix-ui/core/flex';
import { H1 } from '@brix-ui/core/text';

import type { EFC } from 'shared';
import { Api, ApiValue } from './api';

import { Header } from './header';
import { Actions } from './actions';

import { Sections } from './sections';

import Styled from './repo.styles';

const Repo: EFC<ApiValue> = ({ user, repo }) => {
  const title = useMemo(() => `${user} / ${repo}`, [user, repo]);

  return (
    <Api user={user} repo={repo}>
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
    </Api>
  );
};

export default Repo;

export const getServerSideProps: GetServerSideProps<ApiValue> = async (
  context
): Promise<{
  props: ApiValue;
}> => {
  const { user, repo } = context.params || {};

  return {
    props: {
      user,
      repo,
    } as ApiValue,
  };
};
