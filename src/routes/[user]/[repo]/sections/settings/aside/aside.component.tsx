import Flex from '@brix-ui/core/flex';
import { Span } from '@brix-ui/core/text';
import { orUndefined } from '@brix-ui/utils/functions';

import type { EFC } from 'shared';

import Styled from './aside.styles';

interface AsideProps {
  links: string[];
  isLinkSelected(link: string): boolean;
  select(link: string): void;
}

export const Aside: EFC<AsideProps> = ({ links, isLinkSelected, select }) => {
  return (
    <Flex as="aside">
      <Styled.Links direction="column">
        {links.map((link) => {
          return (
            // @ts-ignore
            <Flex as="li" key={link}>
              <Styled.Link
                appearance="faint"
                onClick={() => select(link)}
                isDisabled={!isLinkSelected(link)}
                data-selected={orUndefined(isLinkSelected(link))}
              >
                <Span lineHeightCompensation>{link}</Span>
              </Styled.Link>
            </Flex>
          );
        })}
      </Styled.Links>
    </Flex>
  );
};
