import Flex from '@brix-ui/core/flex';

import type { EFC } from 'shared';

import { ButtonGroup } from './button-group';

export const Actions: EFC = () => {
  return (
    <Flex as="ul" horizontalGap="16px">
      {['Watch', 'Star', 'Fork'].map((title) => {
        return <ButtonGroup key={title} title={title} count={Math.round(Math.random() * 100)} />;
      })}
    </Flex>
  );
};
