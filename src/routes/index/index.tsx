import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@brix-ui/core/button';
import Text, { Span } from '@brix-ui/core/text';
import TextInput from '@brix-ui/core/text-input';

import { EFC } from 'shared';

import Styled from './index.styles';

const Index: EFC = () => {
  const [owner, setOwner] = useState<string>();
  const [repo, setRepo] = useState<string>();

  const { push } = useRouter();

  return (
    <Styled.Main gap={{ vertical: '16px' }} padding="32px">
      <Styled.Label>
        <Text as="p" variant="h5">
          Owner
        </Text>

        <TextInput value={owner} onChange={setOwner} />
      </Styled.Label>

      <Styled.Label>
        <Text as="p" variant="h5">
          Repo
        </Text>

        <TextInput value={repo} onChange={setRepo} />
      </Styled.Label>

      <Styled.Container margin={{ top: '26px' }}>
        <Button intent="accent" isDisabled={!(owner && repo)} onClick={() => push(`/${owner}/${repo}`)}>
          <Span>Go!</Span>
        </Button>
      </Styled.Container>
    </Styled.Main>
  );
};

export default Index;
