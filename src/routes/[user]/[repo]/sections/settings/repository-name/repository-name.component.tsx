import { useRouter } from 'next/router';

import Flex from '@brix-ui/core/flex';
import { P, Span } from '@brix-ui/core/text';
import Button from '@brix-ui/core/button';
import Checkbox from '@brix-ui/core/checkbox';

import type { EFC } from 'shared';

import Styled from './repository-name.styles';

export const RepositoryName: EFC = () => {
  const { query } = useRouter();
  const { repo } = query as { repo: string };

  return (
    <Flex direction="column" margin={{ top: '16px' }} gap={{ vertical: '16px' }}>
      <Styled.Label direction="column" gap="8px">
        <P>Repository name</P>

        <Flex isInline gap={{ horizontal: '8px' }}>
          <Styled.Input isReadonly defaultValue={repo} />

          <Button appearance="faint">
            <Span lineHeightCompensation>Rename</Span>
          </Button>
        </Flex>
      </Styled.Label>

      <Flex direction="column" margin={{ left: '-4px' }}>
        <Styled.Label verticalAlign="center" gap={{ horizontal: '4px' }}>
          <Checkbox />

          <P>Template repository</P>
        </Styled.Label>

        <Styled.Caption>
          Template repositories let users generate new repositories with the same directory structure and files.{' '}
          <a
            href="https://docs.github.com/articles/creating-a-repository-from-a-template/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
          .
        </Styled.Caption>
      </Flex>
    </Flex>
  );
};
