import type { EFC } from 'shared';

import Styled from './github-pages.styles';

export const LearnMore: EFC<{
  href: string;
}> = ({ href }) => {
  return (
    <Styled.Link as="a" href={href}>
      Learn more
    </Styled.Link>
  );
};
