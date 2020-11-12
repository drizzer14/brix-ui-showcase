import { EFC, Anchor } from 'shared';

export const LearnMore: EFC<{
  href: string;
}> = ({ href }) => {
  return <Anchor href={href}>Learn more</Anchor>;
};
