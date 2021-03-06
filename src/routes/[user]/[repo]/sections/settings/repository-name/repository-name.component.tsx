import Flex from '@brix-ui/core/flex';
import { P, Span } from '@brix-ui/core/text';
import Button from '@brix-ui/core/button';

import type { EFC } from 'shared';
import { useApi } from '../../../api';
import { CheckboxDescriptor, Label } from '../shared';

import Styled from './repository-name.styles';

export const RepositoryName: EFC = () => {
  const { repo } = useApi();

  return (
    <Flex direction="column" verticalGap="16px">
      <Label direction="column" gap="8px">
        <P>Repository name</P>

        <Flex isInline horizontalGap="8px">
          <Styled.Input isReadonly defaultValue={repo} />

          <Button appearance="faint">
            <Span lineHeightCompensation>Rename</Span>
          </Button>
        </Flex>
      </Label>

      <CheckboxDescriptor label={<P>Template repository</P>}>
        Template repositories let users generate new repositories with the same directory structure and files.{' '}
        <a
          href="https://docs.github.com/articles/creating-a-repository-from-a-template/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
        .
      </CheckboxDescriptor>
    </Flex>
  );
};
