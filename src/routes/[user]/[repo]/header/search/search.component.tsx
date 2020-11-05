import TextInput from '@brix-ui/core/text-input';

import type { EFC } from 'shared';

import Styled from './search.styles';

export const Search: EFC = () => {
  return (
    <Styled.Container isInline>
      <TextInput isReadonly placeholder="Search or jump to..." suffix={<Styled.Suffix>/</Styled.Suffix>} />
    </Styled.Container>
  );
};
